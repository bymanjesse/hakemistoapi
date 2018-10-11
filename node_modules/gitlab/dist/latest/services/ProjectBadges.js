"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const templates_1 = require("../templates");
class ProjectBadges extends templates_1.ResourceBadges {
    constructor(options) {
        super('projects', options);
    }
}
exports.default = ProjectBadges;
