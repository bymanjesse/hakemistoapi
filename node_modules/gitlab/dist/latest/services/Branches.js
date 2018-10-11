"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const infrastructure_1 = require("../infrastructure");
class Branches extends infrastructure_1.BaseService {
    all(projectId, options) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.get(this, `projects/${pId}/repository/branches`, options);
    }
    create(projectId, branchName, ref) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.post(this, `projects/${pId}/repository/branches`, {
            branch: branchName,
            ref,
        });
    }
    protect(projectId, branchName, options) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.post(this, `projects/${pId}/protected_branches`, Object.assign({ name: branchName }, options));
    }
    remove(projectId, branchName) {
        const [pId, bName] = [projectId, branchName].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.delete(this, `projects/${pId}/repository/branches/${bName}`);
    }
    show(projectId, branchName) {
        const [pId, bName] = [projectId, branchName].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.get(this, `projects/${pId}/repository/branches/${bName}`);
    }
    unprotect(projectId, branchName) {
        const [pId, bName] = [projectId, branchName].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.put(this, `projects/${pId}/repository/branches/${bName}/unprotect`);
    }
}
exports.default = Branches;
