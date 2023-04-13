import { Test, TestingModule } from '@nestjs/testing';
import { BeerController } from './beer.controller';
import { BeerService } from './beer.service';

describe('BeerController', () => {
  let beerController: BeerController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BeerController],
      providers: [BeerService],
    }).compile();

    beerController = app.get<BeerController>(BeerController);
  });

  describe('root', () => {
    it('Verify Punk Api v2', () => {
      expect(beerController.verifyPunkApi()).resolves.toBe(true);
    });
  });
});
