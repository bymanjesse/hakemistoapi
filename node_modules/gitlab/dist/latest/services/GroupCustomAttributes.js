"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const templates_1 = require("../templates");
class GroupCustomAttributes extends templates_1.ResourceCustomAttributes {
    constructor(options) {
        super('groups', options);
    }
}
exports.default = GroupCustomAttributes;
