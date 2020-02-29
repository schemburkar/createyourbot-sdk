declare var process: {
    env: {
        NODE_ENV: string
    }
}

const host = () => process.env.NODE_ENV === 'production'? 'www.createyourbot.dev' : 'localhost:5001';

const root = `https://${host()}/bots/chat`;

const getFrame = (options: IOptions): HTMLIFrameElement => {
    let element = document.createElement('iframe');
    if (options && options.classname) element.className = options.classname;
    return element;
}
const getElement = (options: IOptions): HTMLIFrameElement => {
    let element = getFrame(options);
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


export const createBot = (botId: string, accessToken: string, options: IOptions): HTMLIFrameElement => {
    const element = getElement(options);
    element.src = `${root}/${botId}/${accessToken}`;
    return element;
}

export const createBotWithUrl = (url: string, options: IOptions) => {
    if (url.indexOf(`${root}/`) !== 0) {
        return;
    }
    const element = getElement(options);
    element.src = url;
    return element;
}

export interface IOptions {
    root?: string;
    classname?: string;
}


