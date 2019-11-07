export class NewsView {
    constructor(sourcesData, model) {
        this.newsnames = document.getElementById('newsnames');
        this.articles = document.getElementById('articles');
        this.model = model;

        this.model.subscribe(this.displayArticles.bind(this));

        this.fillSourcesList(sourcesData);
    }

    //Create left panel - news sources
    fillSourcesList(responseData) {
        responseData.sources.forEach(element => {
            let item = document.createElement('li');
            item.id = element.id;
            item.appendChild(document.createTextNode(element.name));
            this.newsnames.appendChild(item);
        });
    }

    displayArticles(articles) {
        while (this.articles.firstChild) {
            this.articles.removeChild(this.articles.firstChild)
          }

        articles.forEach(element => {
            this.createLi(element);
        });

    }
    
    bindClickSource(handler) {
        this.newsnames.childNodes.forEach(element => {
            //Take existing items and add eventListner
            element.addEventListener('click', event => {
                event.preventDefault();
                handler(element)
            });
        });
    }

    createLi(element) {
        let item = document.createElement('li');
        let table = this.addTable(element);

        item.appendChild(table);

        this.articles.appendChild(item);
    }

    addTable(element) {
        let table = document.createElement('table');
        let firstRow = document.createElement('tr');
        let tableImage = this.addImage(element);
        let tableLink = this.addLink(element);

        firstRow.appendChild(tableImage);

        table.appendChild(firstRow);

        let secondRow = document.createElement('tr');
        secondRow.appendChild(tableLink);

        table.appendChild(secondRow);

        let thirdRow = document.createElement('tr');
        let tableDesc = this.addDescription(element);
        thirdRow.appendChild(tableDesc);

        table.appendChild(thirdRow);

        return table;
    }

    addDescription(element) {
        let tableDesc = document.createElement('td');

        let desc = document.createElement('p');
        desc.innerText = element.description;
        tableDesc.appendChild(desc);

        return tableDesc;
    }

    addImage(element) {
        let tableImage = document.createElement('td');
        let image = new Image();
        image.src = element.src;

        tableImage.appendChild(image);

        return tableImage;
    }

    addLink(element) {
        let tableLink = document.createElement('td');
        let aElement = document.createElement('a');

        aElement.href = element.url;
        aElement.appendChild(document.createTextNode(element.title));

        tableLink.appendChild(aElement);

        return tableLink;
    }
}