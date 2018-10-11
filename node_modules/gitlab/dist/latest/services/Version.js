"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const infrastructure_1 = require("../infrastructure");
class Version extends infrastructure_1.BaseService {
    show() {
        return infrastructure_1.RequestHelper.get(this, 'version');
    }
}
exports.default = Version;
