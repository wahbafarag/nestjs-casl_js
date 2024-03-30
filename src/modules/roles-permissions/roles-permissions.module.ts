import { Module } from '@nestjs/common';
import { RolesPermissionsService } from './service/roles-permissions.service';
import { RolesPermissionsController } from './controller/roles-permissions.controller';

@Module({
  providers: [RolesPermissionsService],
  controllers: [RolesPermissionsController],
})
export class RolesPermissionsModule {}
