import { NewsSourcesList } from '../news/news-sources-list';

export class App {
    async start() {
        try {
            await new NewsSourcesList().renderHeaders();
        }
        catch (err) {
            let errorsHandler = await import(/* webpackChunkName: 'errors-handler' */ '../errors-handler/errors-handler.js').then(({ default: ErrorsHandler }) => { return new ErrorsHandler() });
            errorsHandler.handle(err);
        }
    }
}