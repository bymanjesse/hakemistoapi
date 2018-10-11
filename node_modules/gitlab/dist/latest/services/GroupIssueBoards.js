"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const templates_1 = require("../templates");
class GroupIssueBoards extends templates_1.ResourceIssueBoards {
    constructor(options) {
        super('groups', options);
    }
}
exports.default = GroupIssueBoards;
