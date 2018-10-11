"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const infrastructure_1 = require("../infrastructure");
class ApplicationSettings extends infrastructure_1.BaseService {
    all() {
        return infrastructure_1.RequestHelper.get(this, 'application/settings');
    }
    edit(options) {
        return infrastructure_1.RequestHelper.put(this, 'application/settings', options);
    }
}
exports.default = ApplicationSettings;
