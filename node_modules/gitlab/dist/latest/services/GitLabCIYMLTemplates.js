"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const templates_1 = require("../templates");
class GitLabCIYMLTemplates extends templates_1.ResourceTemplates {
    constructor(options) {
        super('gitlab_ci_ymls', options);
    }
}
exports.default = GitLabCIYMLTemplates;
