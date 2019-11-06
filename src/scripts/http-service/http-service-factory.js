import { HttpRequest } from "./http-request"

export class httpRequestFactory {
    httpRequest;

    constructor() {
        this.httpRequest = new HttpRequest();
    }

    doRequest(url, type, options) {
        switch (type) {
            case "GET":
                return new HttpRequest(url, options);
            case "POST":
                options ? options.type = type : options = { type: type };
                return new HttpRequest(url, options);
            case "PUT":
                options ? options.type = type : options = { type: type };
                return new HttpRequest(url, options);
            default:
                throw new Error(`Can't interact with method ${type}`);
        }
    }
}