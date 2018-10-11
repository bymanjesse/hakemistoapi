"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const templates_1 = require("../templates");
class IssueNotes extends templates_1.ResourceNotes {
    constructor(options) {
        super('projects', 'issues', options);
    }
}
exports.default = IssueNotes;
