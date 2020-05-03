import React from 'react';

declare var process: {
    env: {
        NODE_ENV: string
    }
}

const host = () => process.env.NODE_ENV === 'production'? 'www.createyourbot.dev' : 'localhost:5001';

const root = `https://${host()}/bots/chat`;


export const Bot = (options:IBotProps)=>{
    return (
    <iframe className={options.classname} src={`${root}/${options.botId}/${options.accessToken}`} ></iframe>
    );
}
export interface IBotProps {
    botId: string;
    accessToken: string;
    classname?: string;
}

