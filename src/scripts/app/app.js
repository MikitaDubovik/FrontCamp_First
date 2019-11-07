import { LazyLoadingService } from '../lazy-loading/lazy-loading-service';
import { NewsController } from '../news/news-controller';
import { ArticlesModel } from '../news/articles-model';
import { NewsView } from '../news/news-view';
import { LoggerProxy } from '../logger-proxy/logger-proxy';
import { HttpClient } from '../http-service/http-client';

export class App {
    async start() {
        try {
            const loggerProxy = new LoggerProxy(new HttpClient());
            const responseData = await loggerProxy.get("v2/sources?country=gb");
            let model = new ArticlesModel();
            new NewsController(model, new NewsView(responseData, model))
        }
        catch (err) {
            const errorsHandler = await new LazyLoadingService().load('ErrorsHandler');
            errorsHandler.handle(err);
        }
    }
}