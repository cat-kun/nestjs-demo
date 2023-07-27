import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GirlModule } from './girl/girl.module';
import { LoginModule } from './login/login.module';
import { JwtModule } from '@nestjs/jwt';
import Utils from './utils';

@Module({
  imports: [
    GirlModule,
    LoginModule,
    JwtModule.register({
      // 注入jwt模块
      secret: 'dsh',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AppController],
  providers: [AppService, Utils],
})
export class AppModule {}
