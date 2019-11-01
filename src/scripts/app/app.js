

import { NewsSourcesList } from '../news/news-sources-list';

export class App {
    async start() {
        await new NewsSourcesList().renderHeaders();
    }
}