export class ArticlesModel {
    constructor() {
        this.articles = [];
    }

    setArticle(data) {
        this.articles = [];

        this.articles = data.articles.map(element => ({
            src: element.urlToImage,
            description: element.description,
            title: element.title
        }));

        this.onSourceListClick(this.articles);
    }

    bindSourceListClick(callback) {
        this.onSourceListClick = callback
    }
}