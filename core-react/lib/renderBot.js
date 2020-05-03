"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderBot = renderBot;

var React = _interopRequireWildcard(require("react"));

var ReactDOM = _interopRequireWildcard(require("react-dom"));

var _Bot = require("./Bot");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var getElement = function getElement(options) {
  var element = document.createElement('div');

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

function renderBot(botId, accessToken, options) {
  var element = getElement(options);
  ReactDOM.render( /*#__PURE__*/React.createElement(_Bot.Bot, {
    botId: botId,
    accessToken: accessToken,
    classname: options.classname
  }), element);
} // export interface IOptions {
//     root?: string;
//     classname?: string;
// }