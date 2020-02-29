(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define("createyourbot/core", ["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.CreateYourBot = global.CreateYourBot || {};
    global.CreateYourBot.Core = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.createBotWithUrl = _exports.createBot = void 0;

  var host = function host() {
    return true ? 'www.createyourbot.dev' : 'localhost:5001';
  };

  var root = "https://".concat(host(), "/bots/chat");

  var getFrame = function getFrame(options) {
    var element = document.createElement('iframe');
    if (options && options.classname) element.className = options.classname;
    return element;
  };

  var getElement = function getElement(options) {
    var element = getFrame(options);

    if (options && options.root) {
      var rootElement = document.getElementById(options.root);

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
  };

  var createBot = function createBot(botId, accessToken, options) {
    var element = getElement(options);
    element.src = "".concat(root, "/").concat(botId, "/").concat(accessToken);
    return element;
  };

  _exports.createBot = createBot;

  var createBotWithUrl = function createBotWithUrl(url, options) {
    if (url.indexOf("".concat(root, "/")) !== 0) {
      return;
    }

    var element = getElement(options);
    element.src = url;
    return element;
  };

  _exports.createBotWithUrl = createBotWithUrl;
});
