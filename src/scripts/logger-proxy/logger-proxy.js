
export class LoggerProxy {
    constructor(object) {
        const handlers = {
            get(target, key) {
                //prop in object
                const propertyValue = target[key];

                //skip if not a function
                if (typeof propertyValue !== 'function') {
                    return propertyValue;
                }

                //log everything about called function.
                // ...args is args for called function, HttpClient.get() for example
                return function (...args) {
                    console.log(`${key} ${JSON.stringify(args)}`);
                    return propertyValue.apply(target, args);
                };
            }

        };

        const proxy = new Proxy(object, handlers);
        return proxy;
    }
}