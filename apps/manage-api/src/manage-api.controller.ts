import { Controller, Get } from '@nestjs/common';
import { ManageApiService } from './manage-api.service';

@Controller()
export class ManageApiController {
  constructor(private readonly manageApiService: ManageApiService) {}

  @Get()
  getHello(): string {
    return this.manageApiService.getHello();
  }
}
