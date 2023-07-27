import { Injectable } from '@nestjs/common';

@Injectable()
export class GirlService {
  // 业务逻辑
  getGirls() {
    return {
      code: 200,
      data: {
        name: '章三',
        age: '20',
      },
      msg: '',
    };
  }

  addGirl() {
    return {
      code: 200,
      data: {
        id: 1,
        name: '里斯本',
        age: 20,
      },
      msg: '',
    };
  }
}
