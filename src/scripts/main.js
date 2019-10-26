const apiKey = '&apiKey=980e9d4359984b1bb923d5e1043ce9e2';
const baseUrl = 'https://newsapi.org/'

async function fillInNewsNames() {
    let response = await fetch(baseUrl + 'v2/sources?country=gb' + apiKey);
    if (response.ok) {
        let responseData = await response.json();

        let list = document.getElementById('newsnames');

        responseData.sources.forEach(element => {
            let item = document.createElement('li');
            item.id = element.id;
            item.addEventListener("click", fetchArticles)
            item.appendChild(document.createTextNode(element.name));
            list.appendChild(item);
        });
    }
}

async function fetchArticles() {
    let response = await fetch(baseUrl + 'v1/articles?source=' + this.id + apiKey);
    if (response.ok) {
        let responseData = await response.json();

        let list = document.getElementById('articles');
        
        if (list.firstChild) {
            list.innerHTML = '';
        }

        await responseData.articles.forEach(async (element) => {
            let item = document.createElement('li');
            await addLink(item, element);
            list.appendChild(item);
        });;
    }
}

async function addLink(item, element) {
    var aElement = document.createElement('a');

    aElement.href = element.url;
    aElement.appendChild(document.createTextNode(element.title));

    item.appendChild(aElement);
}

fillInNewsNames();