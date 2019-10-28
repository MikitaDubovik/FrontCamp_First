const apiKey = '&apiKey=980e9d4359984b1bb923d5e1043ce9e2';
const baseUrl = 'https://newsapi.org/'

export async function getData(arg){
    let response = await fetch(`${baseUrl}${arg}${apiKey}`);
    if (response.ok) {
        let responseData = await response.json();

        return responseData;
    }

    return null;
}