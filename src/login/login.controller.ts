import { Controller, Post } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller()
export class LoginController {
  constructor(private loginService: LoginService) {}

  @Post('v1/login')
  onLogin(): any {
    return this.loginService.LoginService('code');
  }
}
