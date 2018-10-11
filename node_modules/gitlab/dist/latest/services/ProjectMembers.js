"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const templates_1 = require("../templates");
class ProjectMembers extends templates_1.ResourceMembers {
    constructor(options) {
        super('projects', options);
    }
}
exports.default = ProjectMembers;
