"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const templates_1 = require("../templates");
class GroupBadges extends templates_1.ResourceBadges {
    constructor(options) {
        super('groups', options);
    }
}
exports.default = GroupBadges;
