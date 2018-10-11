"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const templates_1 = require("../templates");
class GroupVariables extends templates_1.ResourceVariables {
    constructor(options) {
        super('groups', null, options);
    }
}
exports.default = GroupVariables;
