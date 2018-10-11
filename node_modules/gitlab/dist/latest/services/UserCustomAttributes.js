"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const templates_1 = require("../templates");
class UserCustomAttributes extends templates_1.ResourceCustomAttributes {
    constructor(options) {
        super('users', options);
    }
}
exports.default = UserCustomAttributes;
