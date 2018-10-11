"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const templates_1 = require("../templates");
class MergeRequestAwardEmojis extends templates_1.ResourceAwardEmojis {
    constructor(options) {
        super('merge_requests', options);
    }
}
exports.default = MergeRequestAwardEmojis;
