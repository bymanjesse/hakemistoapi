"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const templates_1 = require("../templates");
class EpicDiscussions extends templates_1.ResourceDiscussions {
    constructor(options) {
        super('groups', 'epics', options);
    }
}
exports.default = EpicDiscussions;
