"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const infrastructure_1 = require("../infrastructure");
class Lint extends infrastructure_1.BaseService {
    lint(content) {
        return infrastructure_1.RequestHelper.post(this, 'lint', { content });
    }
}
exports.default = Lint;
