"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const templates_1 = require("../templates");
class GitignoreTemplates extends templates_1.ResourceTemplates {
    constructor(options) {
        super('gitignores', options);
    }
}
exports.default = GitignoreTemplates;
