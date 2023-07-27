import { JwtService } from '@nestjs/jwt';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom, map } from 'rxjs';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export default class Utils {
  constructor(
    private readonly httpService: HttpService,
    private readonly jwtService: JwtService,
  ) {}
  async genToken(js_code: string) {
    // openid是用户在同一个小程序下的唯一表示,
    // 即同一个用户在不同的小程序下的openid是不同的
    // 所以当你的appid变化之后,用户的openid就会发生变化,只变AppSecret时 openid是不会变的。
    const params: any = {
      appid: 'xxxxxx', // 管理员在微信公众平台获取
      secret: 'xxxxxx', // 管理员在微信公众平台获取
      grant_type: 'authorization_code', // 写死
      js_code,
    };
    // 请求微信服务端接口 返回session_key和openid
    const res = await firstValueFrom(
      this.httpService
        .get('https://api.weixin.qq.com/sns/jscode2session', { params })
        .pipe(map((response) => response.data)),
    );

    const { openid, session_key, errcode } = res;

    // 如果微信服务端抛出错误，则将错误直接返回给前端
    if (errcode) {
      // https://betheme.net/news/txtlist_i90049v.html?action=onClick
      throw new HttpException({ ...res }, HttpStatus.INTERNAL_SERVER_ERROR);
    } else {
      // 根据session_key和openid 组合成一个用户登录唯一标识token 并维护其生命周期（比如会话变更  就需要重新让其登录）
      // 之后的小程序端的每一个请求都需要携带此token 让我鉴权
      return this.jwtService.sign({ openid, session_key });
    }
  }
}
