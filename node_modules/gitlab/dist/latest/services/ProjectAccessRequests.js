"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const templates_1 = require("../templates");
class ProjectAccessRequests extends templates_1.ResourceAccessRequests {
    constructor(options) {
        super('projects', options);
    }
}
exports.default = ProjectAccessRequests;
