
import { NewsHeadresList } from './news-headres-list';

export class App {
    async loadNews() {
        await new NewsHeadresList().renderHeaders();
    }
}