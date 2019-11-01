
import { HttpServiceFactory } from '../http-service/http-service-factory';
import { NewsArticlesList } from './news-articles-list'

export class NewsSourcesList {

    httpService;
    newsArticlesList

    constructor() {
        this.httpService = new HttpServiceFactory();
        this.newsArticlesList = new NewsArticlesList();
    }

    async renderHeaders() {
        const responseData = await this.httpService.doRequest("v2/sources?country=gb", "GET");

        let list = document.getElementById('newsnames');

        responseData.sources.forEach(element => {
            let item = document.createElement('li');
            item.id = element.id;
            item.addEventListener("click", (event)=>this.fetchArticles(event));
            item.appendChild(document.createTextNode(element.name));
            list.appendChild(item);
        });
    }

    async fetchArticles(event) {
        const responseData = await this.httpService.doRequest(`v1/articles?source=${event.srcElement.id}`, "GET");
        await this.newsArticlesList.renderArticles(responseData, 'articles');
    }
}