import { NewsSourcesList } from '../news/news-sources-list';
import instance from '../errors-handler/errors-handler';


export class App {
    async start() {
        try {
            await new NewsSourcesList().renderHeaders();
        }
        catch (err) {
            instance.handle(err);
        }
    }
}