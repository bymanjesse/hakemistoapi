"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const url_join_1 = __importDefault(require("url-join"));
const request_promise_1 = __importDefault(require("request-promise"));
const XMLHttpRequester_1 = __importDefault(require("./XMLHttpRequester"));
class BaseModel {
    constructor({ token, oauthToken, sudo, url = 'https://gitlab.com', useXMLHttpRequest = false, version = 'v4', rejectUnauthorized = true, } = {}) {
        this.url = url_join_1.default(url, 'api', version);
        this.headers = {};
        this.requester = useXMLHttpRequest ? XMLHttpRequester_1.default : request_promise_1.default;
        this.useXMLHttpRequest = useXMLHttpRequest;
        this.rejectUnauthorized = rejectUnauthorized;
        // Handle auth tokens
        if (oauthToken)
            this.headers.authorization = `Bearer ${oauthToken}`;
        else if (token)
            this.headers['private-token'] = token;
        // Set sudo
        if (sudo)
            this.headers['Sudo'] = sudo;
    }
}
exports.default = BaseModel;
