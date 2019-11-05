export class ArticlesModel {
    constructor() {
        this.articles = [];
    }

    addArticle(data) {
        this.articles = [];
        data.articles.forEach(element => {
            let article = {
                src: element.urlToImage,
                description: element.description,
                title: element.title
            }

            this.articles.push(article);
        });

        this.onSourceListClick(this.articles);
    }

    bindSourceListClick(callback) {
        this.onSourceListClick = callback
    }
}