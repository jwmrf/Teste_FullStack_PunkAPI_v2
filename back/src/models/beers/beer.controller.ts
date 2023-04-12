import { Controller, Get, Param, ParamData, Req, Query} from '@nestjs/common';
import { BeerService } from './beer.service';
import { Beer } from './dto/beer.dto';
import { ApiBearerAuth, ApiResponse, ApiTags} from '@nestjs/swagger';
import { Public } from './../users/decorators/public.decorator';

@Controller('beer')
@ApiTags('beer')
export class BeerController {
  constructor(
    private readonly beerService: BeerService
  ) {}
  
  @Get()
  @Public()
  async getAll(@Query() request: Beer): Promise<any[]> {
    console.log(request.page)
    return this.beerService.find(request);
  }
  

}
