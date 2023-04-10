import axios from "axios";
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export default class Webservices {
    baseUrl = "http://localhost:3000";
    resource: string;
  
    constructor(resource: string) {
      if (!resource) throw new Error("Resource is not provided");
      this.resource = resource;
    }

    setToken(token: string) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }

    async login(email: string, password: string) {
        return await axios.post(this.getUrl(), { email: email, password: password})
    }

    async getUsers() {
      return await axios.get(this.getUrl())
    }

  
    getUrl(id = "") {
      return `${this.baseUrl}/${this.resource}/${id}`;
    }
  
    handleErrors(err: Error) {
      console.log({ message: "Errors is handled here", err });
    }
  }