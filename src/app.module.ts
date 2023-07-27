import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GirlModule } from './girl/girl.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [GirlModule, LoginModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
