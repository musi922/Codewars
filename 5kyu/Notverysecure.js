"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alphanumeric = void 0;
var alphanumeric = function (string) { return string === ("" || ' ' || '_') ? false : /[a-zA-Z0-9]/.test(string); };
exports.alphanumeric = alphanumeric;
