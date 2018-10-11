"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const infrastructure_1 = require("../infrastructure");
class Services extends infrastructure_1.BaseService {
    edit(projectId, serviceName, options) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.put(this, `projects/${pId}/services/${serviceName}`, options);
    }
    remove(projectId, serviceName) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.delete(this, `projects/${pId}/services/${serviceName}`);
    }
    show(projectId, serviceName) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.get(this, `projects/${pId}/services/${serviceName}`);
    }
}
exports.default = Services;
