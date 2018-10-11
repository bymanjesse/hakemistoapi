"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const templates_1 = require("../templates");
class ProjectIssueBoards extends templates_1.ResourceIssueBoards {
    constructor(options) {
        super('projects', options);
    }
}
exports.default = ProjectIssueBoards;
