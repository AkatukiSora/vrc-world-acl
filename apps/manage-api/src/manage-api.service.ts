import { Injectable } from '@nestjs/common';

@Injectable()
export class ManageApiService {
  getHello(): string {
    return 'Hello World!';
  }
}
