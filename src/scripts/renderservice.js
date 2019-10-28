export async function renderArticles(responseData, tag) {
    let list = document.getElementById(tag);

    if (list.firstChild) {
        list.innerHTML = '';
    }

    await responseData.articles.forEach(async (element) => {
        await createLi(element, list);
    });
}

async function createLi(element, list) {
    let item = document.createElement('li');
    let table = document.createElement('table');
    let firstRow = document.createElement('tr');
    let tableImage = addImage(element);
    let tableLink = addLink(element);

    addLink(tableLink, element);

    firstRow.appendChild(tableImage);
    firstRow.appendChild(tableLink);

    table.appendChild(firstRow);

    let secondRow = document.createElement('tr');
    let tableDesc = addDescription(element);

    secondRow.appendChild(tableDesc);

    table.appendChild(secondRow);

    item.appendChild(table);

    list.appendChild(item);
}

function addDescription(element) {
    let tableDesc = document.createElement('td');

    let desc = document.createElement('p');
    desc.innerText = element.description;
    tableDesc.appendChild(desc);

    return tableDesc;
}

function addImage(element) {
    let tableImage = document.createElement('td');
    let image = new Image();
    image.src = element.urlToImage;

    tableImage.appendChild(image);
    tableImage.className = "table-image";

    return tableImage;
}

function addLink(element) {
    let tableLink = document.createElement('td');
    var aElement = document.createElement('a');

    aElement.href = element.url;
    aElement.appendChild(document.createTextNode(element.title));

    tableLink.appendChild(aElement);

    return tableLink;
}