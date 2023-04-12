import axios from "axios";
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export default class Webservices {
    baseUrl = "http://localhost:3000";
    resource: string;
    
    constructor(resource: string) {
      if (!resource) throw new Error("Resource is not provided");
      this.resource = resource;
    }
    
    getUrl(id = "") {
      return `${this.baseUrl}/${this.resource}`;
    }

    setToken(token: string) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }

    async login(email: string, password: string) {
        return await axios.post(this.getUrl(), { email: email, password: password})
    }

    async register(name: string, email: string, password: string) {
      return await axios.post(this.getUrl(), { name: name, email: email, password: password})
    }

    async getUsers() {
      return await axios.get(this.getUrl())
    }

    async getBeers(page: Number): Promise<any> {
      return await (await axios.get(this.getUrl()+`?page=${page}`)).data
    }


  }