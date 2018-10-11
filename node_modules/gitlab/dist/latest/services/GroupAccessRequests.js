"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const templates_1 = require("../templates");
class GroupAccessRequests extends templates_1.ResourceAccessRequests {
    constructor(options) {
        super('groups', options);
    }
}
exports.default = GroupAccessRequests;
