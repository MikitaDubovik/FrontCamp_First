export class Render {

    async renderArticles(responseData, tag) {
        let list = document.getElementById(tag);

        if (list.firstChild) {
            list.innerHTML = '';
        }

        await responseData.articles.forEach(async (element) => {
            await this.createLi(element, list);
        });
    }

    async createLi(element, list) {
        let item = document.createElement('li');
        let table = this.addTable(element);

        item.appendChild(table);

        list.appendChild(item);
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
        image.src = element.urlToImage;

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