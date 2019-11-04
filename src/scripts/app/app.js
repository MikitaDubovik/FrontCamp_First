import { NewsSourcesList } from '../news/news-sources-list';
import { ErrorsHandler } from '../errors-handler/errors-handler';


export class App {
    async start() {
        try {
            await new NewsSourcesList().renderHeaders();
        }
        catch (err) {
            new ErrorsHandler().handle(err);
        }
    }
}