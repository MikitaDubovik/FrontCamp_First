export class HttpRequest {

    apiKey = '&apiKey=980e9d4359984b1bb923d5e1043ce9e2';
    baseUrl = 'https://newsapi.org/';
    bodyKey = 'body';

    constructor(url, options) {
        this.url = `${this.baseUrl}${url}${this.apiKey}`
        this.options = options;
        if (options && options.hasOwnProperty(this.bodyKey)) {
            this.options[this.bodyKey] = JSON.stringify(options[this.bodyKey]);
        }
    }
}