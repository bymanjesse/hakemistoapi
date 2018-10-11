"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const infrastructure_1 = require("../infrastructure");
class Namespaces extends infrastructure_1.BaseService {
    all(options) {
        return infrastructure_1.RequestHelper.get(this, 'namespaces', options);
    }
    show(namespaceId) {
        const nId = encodeURIComponent(namespaceId);
        return infrastructure_1.RequestHelper.get(this, `namespaces/${nId}`);
    }
}
exports.default = Namespaces;
