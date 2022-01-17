import { isFunction } from '../utils/func'

/**
* @description pass handler functions to the 'resize' event
* @param handlers - comma separated list of handler references
*/
export function handleWindowResizeEvents(...handlers) {
    handlers.forEach(handler => {
        if (!isFunction(handler)) {
            console.error(`current argument doesn't belongs to the 'Function' type\nhandler = ${handler}`)
        }
        window.addEventListener('resize', handler);
    });
}
