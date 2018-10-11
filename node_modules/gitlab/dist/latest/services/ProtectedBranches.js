"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const infrastructure_1 = require("../infrastructure");
class ProtectedBranches extends infrastructure_1.BaseService {
    all(projectId, options) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.get(this, `projects/${pId}/protected_branches`, options);
    }
    protect(projectId, branchName, options) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.post(this, `projects/${pId}/protected_branches`, Object.assign({ name: branchName }, options));
    }
    show(projectId, branchName) {
        const [pId, bName] = [projectId, branchName].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.get(this, `projects/${pId}/protected_branches/${bName}`);
    }
    unprotect(projectId, branchName) {
        const [pId, bName] = [projectId, branchName].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.delete(this, `projects/${pId}/protected_branches/${bName}`);
    }
}
exports.default = ProtectedBranches;
