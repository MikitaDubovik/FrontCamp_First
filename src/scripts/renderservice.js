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
    let table = addTable(element);

    item.appendChild(table);

    list.appendChild(item);
}

function addTable(element) {
    let table = document.createElement('table');
    let firstRow = document.createElement('tr');
    let tableImage = addImage(element);
    let tableLink = addLink(element);

    addLink(tableLink, element);

    firstRow.appendChild(tableImage);

    table.appendChild(firstRow);

    let secondRow = document.createElement('tr');
    secondRow.appendChild(tableLink);

    table.appendChild(secondRow);

    let thirdRow = document.createElement('tr');
    let tableDesc = addDescription(element);
    thirdRow.appendChild(tableDesc);

    table.appendChild(thirdRow);

    return table;
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