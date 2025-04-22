import { Test, TestingModule } from '@nestjs/testing';
import { PaymentsServiceController } from './payments-service.controller';
import { PaymentsServiceService } from './payments-service.service';

describe('PaymentsServiceController', () => {
  let paymentsServiceController: PaymentsServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PaymentsServiceController],
      providers: [PaymentsServiceService],
    }).compile();

    paymentsServiceController = app.get<PaymentsServiceController>(PaymentsServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(paymentsServiceController.getHello()).toBe('Hello World!');
    });
  });
});
