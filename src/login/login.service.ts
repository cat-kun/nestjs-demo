import { Body, Injectable } from '@nestjs/common';

@Injectable()
export class LoginService {
  async LoginService(@Body('code') js_code: string): Promise<any> {
    const token = await this.Utils.genToken(js_code);
    return { token };
  }
}
