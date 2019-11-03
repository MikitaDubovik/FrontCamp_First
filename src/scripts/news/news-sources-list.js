
import { NewsArticlesList } from './news-articles-list'
import { LoggerProxy } from '../logger-proxy/logger-proxy';
import { HttpClient } from '../http-service/http-client';

export class NewsSourcesList {

    newsArticlesList;
    loggerProxy;

    constructor() {
        this.newsArticlesList = new NewsArticlesList();
        this.loggerProxy = new LoggerProxy(new HttpClient())
    }

    async renderHeaders() {
        const responseData = await this.loggerProxy.get("v2/sources?country=gb");

        let list = document.getElementById('newsnames');

        responseData.sources.forEach(element => {
            let item = document.createElement('li');
            item.id = element.id;
            item.addEventListener("click", (event) => this.fetchArticles(event));
            item.appendChild(document.createTextNode(element.name));
            list.appendChild(item);
        });
    }

    async fetchArticles(event) {
        const responseData = await this.loggerProxy.get(`v1/articles?source=${event.srcElement.id}`);
        await this.newsArticlesList.renderArticles(responseData, 'articles');
    }
}