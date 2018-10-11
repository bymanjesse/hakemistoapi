"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var errors_1 = require("request-promise-core/errors");
var util_promisify_1 = __importDefault(require("util.promisify"));
var xhr_1 = __importDefault(require("xhr"));
var RequestHelper_1 = require("./RequestHelper");
function promisifyFn(fn) {
    var promisifiedFn = util_promisify_1.default(fn);
    return function getResponse(opts) {
        return __awaiter(this, void 0, void 0, function () {
            var response, sleepTime;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, promisifiedFn(opts)];
                    case 1:
                        response = _a.sent();
                        sleepTime = parseInt(response.headers['retry-after'], 10);
                        if (!(response.statusCode === 429 && sleepTime)) return [3 /*break*/, 3];
                        return [4 /*yield*/, RequestHelper_1.wait(sleepTime * 1000)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        if (response.statusCode >= 400 && response.statusCode <= 599) {
                            throw new errors_1.StatusCodeError(response.statusCode, response.body, {}, null);
                        }
                        _a.label = 4;
                    case 4: return [2 /*return*/, opts.resolveWithFullResponse ? response : response.body];
                }
            });
        });
    };
}
var XMLHttpRequester = promisifyFn(xhr_1.default);
// Temporarily ignore typechecks, so that we can assign props to `XMLHttpRequester`
// typed as `const XMLHttpRequester: (opts: any) => Promise<any>`
// @ts-ignore
XMLHttpRequester.del = promisifyFn(xhr_1.default.del);
// @ts-ignore
XMLHttpRequester.delete = XMLHttpRequester.del;
// @ts-ignore
XMLHttpRequester.get = promisifyFn(xhr_1.default.get);
// @ts-ignore
XMLHttpRequester.head = promisifyFn(xhr_1.default.head);
// @ts-ignore
XMLHttpRequester.patch = promisifyFn(xhr_1.default.patch);
// @ts-ignore
XMLHttpRequester.post = promisifyFn(xhr_1.default.post);
// @ts-ignore
XMLHttpRequester.put = promisifyFn(xhr_1.default.put);
exports.default = XMLHttpRequester;
