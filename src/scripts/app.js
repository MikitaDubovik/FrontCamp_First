
import { NewsHeadresList } from './news-headres-list';

export class App {
    async start() {
        await new NewsHeadresList().renderHeaders();
    }
}