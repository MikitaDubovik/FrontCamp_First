export class Modal {
    modal;

    constructor() {
        this.modal = this.createModal();
    }

    showModal() {
        this.modal.style.display = "block";
    }

    createModal() {
        let modal = this.createElement('div');
        modal.className = "modal-content";
        modal.id = "modal";
        modal.style.display = "none";

        modal.appendChild(this.createHeader());
        modal.appendChild(this.createBody());

        this.disableView();
        document.body.appendChild(modal);
        return modal;
    }

    createHeader() {
        let modalHeader = this.createElement('div');
        modalHeader.className = "modal-header";

        let span = this.createElement('span');
        span.className = "close";
        span.innerHTML = "&times;";
        span.addEventListener("click", this.closeModal);
        modalHeader.appendChild(span);

        let h2 = this.createElement('h2');
        h2.innerText = "Error";

        modalHeader.appendChild(h2);

        return modalHeader;
    }

    createBody() {
        let modalBody = this.createElement('div')
        modalBody.className = "modal-body";
        let p = this.createElement('p');
        modalBody.appendChild(p);
        return modalBody;
    }

    closeModal() {
        let modal = document.getElementById("modal");
        modal.style.display = "none";

        let row = document.getElementById("main-row");
        row.style.opacity = null;
        row.style.pointerEvents = null;
    }

    disableView() {
        let row = document.getElementById("main-row");
        row.setAttribute("style", "pointer-events: none; opacity:0.3;");
    }

    createElement(elementName) {
        return document.createElement(elementName);
    }

    updateErrorMessage(error) {
        this.modal.childNodes[1].childNodes[0].innerText = error;
    }
}