import { Module } from '@nestjs/common';
import { BeerController } from './beer.controller';
import { BeerService } from './beer.service';

@Module({
  imports: [],
  controllers: [BeerController],
  providers: [BeerService],
  exports: [BeerService]
})
export class BeerModule {}
