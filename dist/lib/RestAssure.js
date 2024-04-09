"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestAssure = void 0;
const Requests_1 = require("./Requests");
const url_1 = __importDefault(require("url"));
const axios_1 = __importDefault(require("axios"));
class RestAssure {
    constructor() {
        RestAssure.Instance = this;
        this.serverURL = undefined;
    }
    static validate() {
        if (!RestAssure.Instance)
            throw new Error("Assure has not been initialised!");
        if (!RestAssure.Instance.serverURL)
            throw new Error("Assure Object has not been assigned a server to run tests on!");
    }
    useServer(serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    get(path) {
        var _a;
        RestAssure.validate();
        return new Requests_1.AssureRequest(url_1.default.resolve((_a = RestAssure.Instance) === null || _a === void 0 ? void 0 : _a.serverURL, path), "get");
    }
    post(path, data) {
        var _a;
        RestAssure.validate();
        return new Requests_1.AssureRequest(url_1.default.resolve((_a = RestAssure.Instance) === null || _a === void 0 ? void 0 : _a.serverURL, path), "post", data);
    }
    sendRequest(url, method, data) {
        return axios_1.default.request({
            method,
            url,
            data,
        });
    }
}
exports.RestAssure = RestAssure;
