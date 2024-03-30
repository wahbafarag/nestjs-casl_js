import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RolesPermissionsModule } from './modules/roles-permissions/roles-permissions.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [RolesPermissionsModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
