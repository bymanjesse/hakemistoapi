"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const templates_1 = require("../templates");
class PipelineScheduleVariables extends templates_1.ResourceVariables {
    constructor(options) {
        super('projects', 'pipelines', options);
    }
}
exports.default = PipelineScheduleVariables;
