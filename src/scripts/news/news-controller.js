import { HttpClient } from "../http-service/http-client";
import { LoggerProxy } from "../logger-proxy/logger-proxy";

export class NewsController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.loggerProxy = new LoggerProxy(new HttpClient());

        this.view.bindClickSource(this.hanldeClick);

        this.onSourceListClick(this.model.articles);
    }

    onSourceListClick = articles => {
        this.view.displayArticles(articles);
    }

    hanldeClick = async (element) => {
        //Load articles from service
        const responseData = await this.loggerProxy.get(`v1/articles?source=${element.id}`);
        this.model.setArticle(responseData);
    }
}