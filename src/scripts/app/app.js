import { NewsSourcesList } from '../news/news-sources-list';
import { LazyLoadingService } from '../lazy-loading/lazy-loading-service';

export class App {
    async start() {
        try {
            await new NewsSourcesList().renderHeaders();
        }
        catch (err) {
            let errorsHandler = await new LazyLoadingService().load('ErrorsHandler');
            errorsHandler.handle(err);
        }
    }
}