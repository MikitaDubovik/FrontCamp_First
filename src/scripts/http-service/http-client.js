import { HttpServiceFactory } from './http-service-factory.js';

//Body of POST/PUT request in options of fetch
//headers = { 'Content-Type': 'application/json' } for them
export class HttpClient {
    httpServiceFactory;

    constructor(){
        this.httpServiceFactory = new HttpServiceFactory();
    }

    get(url, options) {
        return this.httpServiceFactory.doRequest(url, 'GET', options);
    }

    post(url, options) {
        return this.httpServiceFactory.doRequest(url, 'POST', options);
    }

    put(url, options) {
        return this.httpServiceFactory.doRequest(url, 'PUT', options);
    }
}