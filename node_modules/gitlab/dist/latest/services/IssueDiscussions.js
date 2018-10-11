"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const templates_1 = require("../templates");
class IssueDiscussions extends templates_1.ResourceDiscussions {
    constructor(options) {
        super('projects', 'issues', options);
    }
}
exports.default = IssueDiscussions;
