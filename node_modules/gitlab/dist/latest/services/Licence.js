"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const infrastructure_1 = require("../infrastructure");
class Licence extends infrastructure_1.BaseService {
    all() {
        return infrastructure_1.RequestHelper.get(this, 'licence');
    }
    create() {
        return infrastructure_1.RequestHelper.post(this, 'licence');
    }
}
exports.default = Licence;
