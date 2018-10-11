"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const infrastructure_1 = require("../infrastructure");
class RepositoryFiles extends infrastructure_1.BaseService {
    create(projectId, filePath, branch, options) {
        const [pId, path] = [projectId, filePath].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.post(this, `projects/${pId}/repository/files/${path}`, Object.assign({ branch }, options));
    }
    edit(projectId, filePath, branch, options) {
        const [pId, path] = [projectId, filePath].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.put(this, `projects/${pId}/repository/files/${path}`, Object.assign({ branch }, options));
    }
    remove(projectId, filePath, branch, options) {
        const [pId, path] = [projectId, filePath].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.delete(this, `projects/${pId}/repository/files/${path}`, Object.assign({ branch }, options));
    }
    show(projectId, filePath, ref) {
        const [pId, path] = [projectId, filePath].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.get(this, `projects/${pId}/repository/files/${path}`, {
            ref,
        });
    }
    showRaw(projectId, filePath, ref) {
        const [pId, path] = [projectId, filePath].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.get(this, `projects/${pId}/repository/files/${path}/raw`, { ref });
    }
}
exports.default = RepositoryFiles;
