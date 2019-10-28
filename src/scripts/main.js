import { getData } from './receiveservice';
import { renderArticles } from './renderservice'

async function fillInNewsNames() {
    let responseData = await getData("v2/sources?country=gb");
    
    let list = document.getElementById('newsnames');

    responseData.sources.forEach(element => {
        let item = document.createElement('li');
        item.id = element.id;
        item.addEventListener("click", fetchArticles)
        item.appendChild(document.createTextNode(element.name));
        list.appendChild(item);
    });
}

async function fetchArticles() {
    let responseData = await getData(`v1/articles?source=${this.id}`);
    renderArticles(responseData, 'articles');
    
}

fillInNewsNames();