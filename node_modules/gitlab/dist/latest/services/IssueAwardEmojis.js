"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const templates_1 = require("../templates");
class IssueAwardEmojis extends templates_1.ResourceAwardEmojis {
    constructor(options) {
        super('issues', options);
    }
}
exports.default = IssueAwardEmojis;
