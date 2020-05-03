"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bot = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var host = function host() {
  return process.env.NODE_ENV === 'production' ? 'www.createyourbot.dev' : 'localhost:5001';
};

var root = "https://".concat(host(), "/bots/chat");

var Bot = function Bot(options) {
  return (/*#__PURE__*/_react.default.createElement("iframe", {
      className: options.classname,
      src: "".concat(root, "/").concat(options.botId, "/").concat(options.accessToken)
    })
  );
};

exports.Bot = Bot;