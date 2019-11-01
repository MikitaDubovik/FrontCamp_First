import { HttpService } from "./http-service"

export class HttpServiceFactory {
    apiKey = '&apiKey=980e9d4359984b1bb923d5e1043ce9e2';
    baseUrl = 'https://newsapi.org/';

    async doRequest(url, type, body) {
        let response;
        switch (type) {
            case "GET":
                response = await this.get(url);
                break;
            case "POST":
                response = await this.post(url, body);
                break;
            case "PUT":
                response = await this.put(url, body)
                break;
        }

        return response
    }

    async get(url) {
        const response = await fetch(`${this.baseUrl}${url}${this.apiKey}`);

        return await this.getData(response);
    }

    async post(url, body) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })

        return await this.getData(response);
    }

    async put(url, body) {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })

        return await this.getData(response);
    }

    async getData(response) {
        if (response.ok) {
            const responseData = await response.json();

            return responseData;
        }

        return null;
    }
}