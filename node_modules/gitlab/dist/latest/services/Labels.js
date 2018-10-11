"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const infrastructure_1 = require("../infrastructure");
class Labels extends infrastructure_1.BaseService {
    all(projectId, options = {}) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.get(this, `projects/${pId}/labels`, options);
    }
    create(projectId, options = {}) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.post(this, `projects/${pId}/labels`, options);
    }
    edit(projectId, labelName, options = {}) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.put(this, `projects/${pId}/labels`, Object.assign({ name: labelName }, options));
    }
    remove(projectId, labelName) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.delete(this, `projects/${pId}/labels`, { name: labelName });
    }
    subscribe(projectId, labelId, options = {}) {
        const [pId, lId] = [projectId, labelId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.post(this, `projects/${pId}/issues/${lId}/subscribe`, options);
    }
    unsubscribe(projectId, labelId) {
        const [pId, lId] = [projectId, labelId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.delete(this, `projects/${pId}/issues/${lId}/unsubscribe`);
    }
}
exports.default = Labels;
