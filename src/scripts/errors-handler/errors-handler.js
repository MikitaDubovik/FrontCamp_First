import { Modal } from "./Modal.js"

export default class ErrorsHandler {
    modal;
    constructor() {
        if (typeof ErrorsHandler.instance === 'object') {
            return ErrorsHandler.instance;
        }

        ErrorsHandler.instance = this;

        this.modal = new Modal();

        return this;
    }

    handle(err) {
        if (!ErrorsHandler.instance) {
            ErrorsHandler.instance = this;
        }

        this.modal.updateErrorMessage(err);
        this.modal.showModal();
    }
}