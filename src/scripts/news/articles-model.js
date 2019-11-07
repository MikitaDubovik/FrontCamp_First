export class ArticlesModel {
    constructor() {
        this.articles = [];
        this.observers = [];
    }

    setArticle(data) {
        this.articles = [];

        this.articles = data.articles.map(element => ({
            src: element.urlToImage,
            description: element.description,
            title: element.title
        }));

        this.observers.forEach(observer => observer(this.articles));
    }

    bindSourceListClick(callback) {
        this.onSourceListClick = callback
    }

    subscribe(callback) {
        this.observers.push(callback);
    }

    unsubscribe(callback) {
        this.observers = this.observers.filter(subscriber => subscriber !== callback);
    }
}