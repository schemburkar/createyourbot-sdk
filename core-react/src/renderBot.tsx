import * as React from "react";
import * as ReactDOM from "react-dom";
import { Bot } from "./Bot";


const getElement = (options) => {
    let element = document.createElement('div');
    if (options && options.root) {
        const rootElement = document.getElementById(options.root);
        if (rootElement) {
            rootElement.appendChild(element);
            return element;
        }
    }
    if (document.currentScript) {
        document.currentScript.parentElement.insertBefore(element, document.currentScript.nextSibling);
        return element;
    }

    document.appendChild(element);
    return element;
}

export function renderBot(botId, accessToken, options){
    const element = getElement(options);

    ReactDOM.render( <Bot botId={botId}  accessToken={accessToken} classname={options.classname} />,
        element
      );
}

// export interface IOptions {
//     root?: string;
//     classname?: string;
// }


