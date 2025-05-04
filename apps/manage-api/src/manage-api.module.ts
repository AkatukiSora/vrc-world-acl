import { Module } from '@nestjs/common';
import { ManageApiController } from './manage-api.controller';
import { ManageApiService } from './manage-api.service';

@Module({
  imports: [],
  controllers: [ManageApiController],
  providers: [ManageApiService],
})
export class ManageApiModule {}
