import { Injectable } from '@nestjs/common';

@Injectable()
export class GirlService {
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
}
