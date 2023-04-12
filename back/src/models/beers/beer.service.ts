import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Beer } from './dto/beer.dto';
import axios from "axios";
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

@Injectable()
export class BeerService {
  constructor(
  ) {}

  async find(request: Beer): Promise<any[]> {
    return await (await axios.get(`https://api.punkapi.com/v2/beers?page=${request.page}&per_page=10`)).data
  }
  
  async findOne(email: string): Promise<Beer | undefined> {
    return undefined
    //return this.userRepository.findOne({ where: { email: email, status: true }});
  }

}
