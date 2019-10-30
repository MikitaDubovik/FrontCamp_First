
import { HttpService } from './http-service';
import { NewsArticlesList } from './news-articles-list'

export class NewsHeadresList {

    #httpService;

    constructor() {
        this.#httpService = new HttpService();
    }

    async renderHeaders() {
        const responseData = await this.#httpService.getArticles("v2/sources?country=gb");

        let list = document.getElementById('newsnames');

        responseData.sources.forEach(element => {
            let item = document.createElement('li');
            item.id = element.id;
            item.addEventListener("click", this.fetchArticles);
            item.appendChild(document.createTextNode(element.name));
            list.appendChild(item);
        });
    }

    //TODO: Не знаю как в EventListener пропихнуть приватное поле
    async fetchArticles() {
        const responseData = await new HttpService().getArticles(`v1/articles?source=${this.id}`);
        await new NewsArticlesList().renderArticles(responseData, 'articles');
    }
}