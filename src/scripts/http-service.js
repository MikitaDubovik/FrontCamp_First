export class HttpService {
    #privateField;
    #apiKey = '&apiKey=980e9d4359984b1bb923d5e1043ce9e2';
    #baseUrl = 'https://newsapi.org/';

    async getData(arg) {
        const response = await fetch(`${this.#baseUrl}${arg}${this.#apiKey}`);
        if (response.ok) {
            const responseData = await response.json();

            return responseData;
        }

        return null;
    }
}