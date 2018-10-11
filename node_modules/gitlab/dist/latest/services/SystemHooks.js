"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const infrastructure_1 = require("../infrastructure");
class SystemHooks extends infrastructure_1.BaseService {
    add(url, options) {
        return infrastructure_1.RequestHelper.post(this, 'hooks', Object.assign({ url }, options));
    }
    all(options) {
        return infrastructure_1.RequestHelper.get(this, 'hooks', options);
    }
    edit(hookId, url, options) {
        const hId = encodeURIComponent(hookId);
        return infrastructure_1.RequestHelper.put(this, `hooks/${hId}`, Object.assign({ url }, options));
    }
    remove(projectId, hookId) {
        const hId = encodeURIComponent(hookId);
        return infrastructure_1.RequestHelper.delete(this, `hooks/${hId}`);
    }
}
exports.default = SystemHooks;
