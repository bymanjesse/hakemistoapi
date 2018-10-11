"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const templates_1 = require("../templates");
class ProjectSnippetDiscussions extends templates_1.ResourceDiscussions {
    constructor(options) {
        super('projects', 'snippets', options);
    }
}
exports.default = ProjectSnippetDiscussions;
