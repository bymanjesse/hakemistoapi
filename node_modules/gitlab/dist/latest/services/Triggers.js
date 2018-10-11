"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const infrastructure_1 = require("../infrastructure");
class Triggers extends infrastructure_1.BaseService {
    add(projectId, options) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.post(this, `projects/${pId}/triggers`, options);
    }
    all(projectId) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.get(this, `projects/${pId}/triggers`);
    }
    edit(projectId, triggerId, options) {
        const [pId, tId] = [projectId, triggerId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.put(this, `projects/${pId}/triggers/${tId}`, options);
    }
    remove(projectId, triggerId) {
        const [pId, tId] = [projectId, triggerId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.delete(this, `projects/${pId}/triggers/${tId}`);
    }
    show(projectId, triggerId) {
        const [pId, tId] = [projectId, triggerId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.get(this, `projects/${pId}/triggers/${tId}`);
    }
}
exports.default = Triggers;
