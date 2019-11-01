
import { HttpService } from '../http-service/http-service';
import { NewsArticlesList } from './news-articles-list'

export class NewsSourcesList {

    httpService;
    newsArticlesList

    constructor() {
        this.httpService = new HttpService();
        this.newsArticlesList = new NewsArticlesList();
    }

    async renderHeaders() {
        const responseData = await this.httpService.getNewsData("v2/sources?country=gb");

        let list = document.getElementById('newsnames');

        responseData.sources.forEach(element => {
            let item = document.createElement('li');
            item.id = element.id;
            item.addEventListener("click", this.fetchArticles.bind(this));
            item.appendChild(document.createTextNode(element.name));
            list.appendChild(item);
        });
    }

    async fetchArticles(event) {
        const responseData = await this.httpService.getNewsData(`v1/articles?source=${event.srcElement.id}`);
        await this.newsArticlesList.renderArticles(responseData, 'articles');
    }
}