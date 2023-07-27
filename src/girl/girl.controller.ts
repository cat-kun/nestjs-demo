import { Controller, Get, Post } from '@nestjs/common';
import { GirlService } from './girl.service';

@Controller()
export class GirlController {
  constructor(private girlService: GirlService) {}

  @Get('v1/girl')
  getGirls(): any {
    return this.girlService.getGirls();
  }

  @Post('v1/updateGirl')
  updateGirl(): any {
    return this.girlService.addGirl();
  }
}
