"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const infrastructure_1 = require("../infrastructure");
class Keys extends infrastructure_1.BaseService {
    show(keyId) {
        const kId = encodeURIComponent(keyId);
        return infrastructure_1.RequestHelper.get(this, `keys/${kId}`);
    }
}
exports.default = Keys;
