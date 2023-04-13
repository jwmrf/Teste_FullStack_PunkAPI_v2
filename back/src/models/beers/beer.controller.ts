import { Controller, Get, Query} from '@nestjs/common';
import { BeerService } from './beer.service';
import { Beer } from './dto/beer.dto';
import { ApiTags} from '@nestjs/swagger';

@Controller('beer')
@ApiTags('beer')
export class BeerController {
  constructor(
    private readonly beerService: BeerService
  ) {}
  
  @Get()
  async getAll(@Query() request: Beer): Promise<Object> {
    return this.beerService.find(request);
  }
  
  @Get('verify')
  async verifyPunkApi(): Promise<Boolean> {
    return await this.beerService.verify();
  }

}
