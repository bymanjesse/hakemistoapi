"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var url_join_1 = __importDefault(require("url-join"));
var request_promise_1 = __importDefault(require("request-promise"));
var XMLHttpRequester_1 = __importDefault(require("./XMLHttpRequester"));
var BaseModel = /** @class */ (function () {
    function BaseModel(_a) {
        var _b = _a === void 0 ? {} : _a, token = _b.token, oauthToken = _b.oauthToken, sudo = _b.sudo, _c = _b.url, url = _c === void 0 ? 'https://gitlab.com' : _c, _d = _b.useXMLHttpRequest, useXMLHttpRequest = _d === void 0 ? false : _d, _e = _b.version, version = _e === void 0 ? 'v4' : _e, _f = _b.rejectUnauthorized, rejectUnauthorized = _f === void 0 ? true : _f;
        this.url = url_join_1.default(url, 'api', version);
        this.headers = {};
        this.requester = useXMLHttpRequest ? XMLHttpRequester_1.default : request_promise_1.default;
        this.useXMLHttpRequest = useXMLHttpRequest;
        this.rejectUnauthorized = rejectUnauthorized;
        // Handle auth tokens
        if (oauthToken)
            this.headers.authorization = "Bearer " + oauthToken;
        else if (token)
            this.headers['private-token'] = token;
        // Set sudo
        if (sudo)
            this.headers['Sudo'] = sudo;
    }
    return BaseModel;
}());
exports.default = BaseModel;
