"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const templates_1 = require("../templates");
class ProjectMilestones extends templates_1.ResourceMilestones {
    constructor(options) {
        super('projects', options);
    }
}
exports.default = ProjectMilestones;
