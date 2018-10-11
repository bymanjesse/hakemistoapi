"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const infrastructure_1 = require("../infrastructure");
class FeatureFlags extends infrastructure_1.BaseService {
    all(options) {
        return infrastructure_1.RequestHelper.get(this, 'features', options);
    }
    set(name, options) {
        const encodedName = encodeURIComponent(name);
        return infrastructure_1.RequestHelper.post(this, `features/${encodedName}`, options);
    }
}
exports.default = FeatureFlags;
