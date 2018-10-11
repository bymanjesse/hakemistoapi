"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const templates_1 = require("../templates");
class ProjectVariables extends templates_1.ResourceVariables {
    constructor(options) {
        super('projects', null, options);
    }
}
exports.default = ProjectVariables;
