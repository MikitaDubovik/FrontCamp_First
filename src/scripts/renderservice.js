export async function renderArticles(responseData, tag){
    let list = document.getElementById(tag);

    if (list.firstChild) {
        list.innerHTML = '';
    }

    await responseData.articles.forEach(async (element) => {
        let item = document.createElement('li');
        await addLink(item, element);
        list.appendChild(item);
    });
} 

async function addLink(item, element) {
    var aElement = document.createElement('a');

    aElement.href = element.url;
    aElement.appendChild(document.createTextNode(element.title));

    item.appendChild(aElement);
}