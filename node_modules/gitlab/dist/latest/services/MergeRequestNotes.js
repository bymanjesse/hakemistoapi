"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const templates_1 = require("../templates");
class MergeRequestNotes extends templates_1.ResourceNotes {
    constructor(options) {
        super('projects', 'merge_requests', options);
    }
}
exports.default = MergeRequestNotes;
