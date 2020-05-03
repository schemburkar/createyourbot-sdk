### Getting Started in JavaScript
#### Include script
```
<script src="../dist/core.js"></script>
```

#### Usage
```
CreateYourBot.Core.createBot(botId, accessToken);
```


##### Advanced

###### With dom element and stying

```
CreateYourBot.Core.createBot(botId, accessToken, { root: 'sampleBot', classname: 'frame' });
```

###### With bot url and dom element
```
CreateYourBot.Core.createBotWithUrl(url, { root: 'sampleBot' });
```


### Getting Started in Node/React/ES6

#### Usage

```
import { createBot, createBotWithUrl } from 'createyourbot.core'
OR
import { createBot, createBotWithUrl } from 'createyourbot.core/dist/core'

createBot(botId, accessToken, { root:'sample'});

createBot(botIdUrl, { root:'sample'});


```

#### API

Following library functions are available

**createBot**

```
function createBot(botId: string, accessToken: string, options: IOptions) => HTMLIFrameElement
{
    // returns iFrame
}
```

**createBotWithUrl**

```
function createBotWithUrl(url: string, options: IOptions) => HTMLIFrameElement
{
    // returns iFrame
}
```

**Options**

```
interface IOptions {
    root?: string;
    classname?: string;
}
```