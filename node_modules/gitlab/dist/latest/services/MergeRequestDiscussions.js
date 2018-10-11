"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const templates_1 = require("../templates");
class MergeRequestDiscussions extends templates_1.ResourceDiscussions {
    constructor(options) {
        super('projects', 'merge_requests', options);
    }
}
exports.default = MergeRequestDiscussions;
