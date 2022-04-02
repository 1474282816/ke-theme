"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cfTheme = exports.aliyunTheme = exports.defaultTheme = exports.darkTheme = void 0;
var darkTheme_1 = __importDefault(require("./darkTheme"));
exports.darkTheme = darkTheme_1.default;
var defaultTheme_1 = __importDefault(require("./defaultTheme"));
exports.defaultTheme = defaultTheme_1.default;
var aliyunTheme_1 = __importDefault(require("./aliyunTheme"));
exports.aliyunTheme = aliyunTheme_1.default;
var cfTheme_1 = __importDefault(require("./cfTheme"));
exports.cfTheme = cfTheme_1.default;
exports.default = { darkTheme: darkTheme_1.default, defaultTheme: defaultTheme_1.default, aliyunTheme: aliyunTheme_1.default, cfTheme: cfTheme_1.default };
