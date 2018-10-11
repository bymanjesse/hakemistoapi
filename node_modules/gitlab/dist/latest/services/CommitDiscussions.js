"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const templates_1 = require("../templates");
class CommitDiscussions extends templates_1.ResourceDiscussions {
    constructor(options) {
        super('projects', 'commits', options);
    }
}
exports.default = CommitDiscussions;
