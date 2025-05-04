import { Test, TestingModule } from '@nestjs/testing';
import { ManageApiController } from './manage-api.controller';
import { ManageApiService } from './manage-api.service';

describe('ManageApiController', () => {
  let manageApiController: ManageApiController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ManageApiController],
      providers: [ManageApiService],
    }).compile();

    manageApiController = app.get<ManageApiController>(ManageApiController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(manageApiController.getHello()).toBe('Hello World!');
    });
  });
});
