"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Bot = require("./Bot");

Object.keys(_Bot).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Bot[key];
    }
  });
});

var _renderBot = require("./renderBot");

Object.keys(_renderBot).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _renderBot[key];
    }
  });
});