"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const templates_1 = require("../templates");
class ProjectSnippetNotes extends templates_1.ResourceNotes {
    constructor(options) {
        super('projects', 'snippets', options);
    }
}
exports.default = ProjectSnippetNotes;
