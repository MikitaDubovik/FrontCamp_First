export class LazyLoadingService {
    //some kind of Fabric pattern 
    //TODO Check the ability of  file loading by the relative pass
    load(name) {
        switch (name) {
            case 'ErrorsHandler':
                return import(/* webpackChunkName: 'errors-handler' */ '../errors-handler/errors-handler.js').then(({ default: ErrorsHandler }) => { return new ErrorsHandler() });
            default:
                throw new Error('Check the name of ypur module');
        }

    }
}