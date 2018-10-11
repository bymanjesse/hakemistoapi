"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const templates_1 = require("../templates");
class GroupMilestones extends templates_1.ResourceMilestones {
    constructor(options) {
        super('groups', options);
    }
}
exports.default = GroupMilestones;
