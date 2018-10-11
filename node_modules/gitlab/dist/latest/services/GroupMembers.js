"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const templates_1 = require("../templates");
class GroupMembers extends templates_1.ResourceMembers {
    constructor(options) {
        super('groups', options);
    }
}
exports.default = GroupMembers;
