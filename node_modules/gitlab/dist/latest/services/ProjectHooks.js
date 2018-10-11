"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const infrastructure_1 = require("../infrastructure");
class ProjectHooks extends infrastructure_1.BaseService {
    all(projectId, options) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.get(this, `projects/${pId}/hooks`, options);
    }
    show(projectId, hookId) {
        const [pId, hId] = [projectId, hookId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.get(this, `projects/${pId}/hooks/${hId}`);
    }
    add(projectId, url, options) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.post(this, `projects/${pId}/hooks`, Object.assign({ url }, options));
    }
    edit(projectId, hookId, url, options) {
        const [pId, hId] = [projectId, hookId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.put(this, `projects/${pId}/hooks/${hId}`, Object.assign({ url }, options));
    }
    remove(projectId, hookId) {
        const [pId, hId] = [projectId, hookId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.delete(this, `projects/${pId}/hooks/${hId}`);
    }
}
exports.default = ProjectHooks;
