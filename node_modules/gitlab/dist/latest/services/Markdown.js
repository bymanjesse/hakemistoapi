"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const infrastructure_1 = require("../infrastructure");
class Markdown extends infrastructure_1.BaseService {
    render(text, options) {
        return infrastructure_1.RequestHelper.post(this, 'markdown', Object.assign({ text }, options));
    }
}
exports.default = Markdown;
