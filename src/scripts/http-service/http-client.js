import { httpRequestFactory } from './http-service-factory.js';

//Body of POST/PUT request in options of fetch
//headers = { 'Content-Type': 'application/json' } for them
export class HttpClient {
    constructor() {
        this.httpRequestFactory = new httpRequestFactory();
    }

    async get(url, options) {
        return await this.doRequest(url, 'GET', options);
    }

    async post(url, options) {
        return await this.doRequest(url, 'POST', options);
    }

    async put(url, options) {
        return await this.doRequest(url, 'PUT', options);
    }

    async doRequest(url, method, options) {
        const httpRequest = this.httpRequestFactory.doRequest(url, method, options);
        const response = await fetch(httpRequest.url, { ...httpRequest.options });

        if (response.ok) {
            const responseData = await response.json();

            return responseData;
        }

        return null;
    }
}