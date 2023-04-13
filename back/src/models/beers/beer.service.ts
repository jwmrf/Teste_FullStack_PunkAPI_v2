import { Injectable } from '@nestjs/common';
import { Beer } from './dto/beer.dto';
import axios from "axios";
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

@Injectable()
export class BeerService {
  constructor(
  ) {}

  async find(request: Beer): Promise<Object> {
    return await (await axios.get(`https://api.punkapi.com/v2/beers?page=${request.page}${ request.name ?  "&beer_name="+request.name : ''}&per_page=8`)).data
  }
  async verify(): Promise<Boolean> {
    return axios.get(`https://api.punkapi.com/v2/beers`).then(() => {
      return true;
    }).catch(() => {
      return false;
    });
  }

}
