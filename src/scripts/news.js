import { Receive } from './receiveservice';
import { Render } from './renderservice'

export class News {

    #render;

    constructor(){
        this.#render = new Receive();
    }
    async  fillInNewsNames() {
        const responseData = await this.#render.getData("v2/sources?country=gb");
        
        let list = document.getElementById('newsnames');
    
        responseData.sources.forEach(element => {
            let item = document.createElement('li');
            item.id = element.id;
            item.addEventListener("click", this.fetchArticles);
            item.appendChild(document.createTextNode(element.name));
            list.appendChild(item);
        });
    }
    
    //TODO: Не знаю как в EventListener пропихнуть приватное поле
    async fetchArticles() {
        const responseData = await new Receive().getData(`v1/articles?source=${this.id}`);
        await new Render().renderArticles(responseData, 'articles');
    }
}