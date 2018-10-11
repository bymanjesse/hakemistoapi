"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const infrastructure_1 = require("../infrastructure");
class Repositories extends infrastructure_1.BaseService {
    compare(projectId, from, to) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.get(this, `projects/${pId}/repository/compare`, {
            from,
            to,
        });
    }
    contributors(projectId) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.get(this, `projects/${pId}/repository/contributors`);
    }
    showArchive(projectId, { sha }) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.get(this, `projects/${pId}/repository/archive`, {
            sha,
        });
    }
    showBlob(projectId, sha) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.get(this, `projects/${pId}/repository/blobs/${sha}`);
    }
    showBlobRaw(projectId, sha) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.get(this, `projects/${pId}/repository/blobs/${sha}/raw`);
    }
    tree(projectId, options) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.get(this, `projects/${pId}/repository/tree`, options);
    }
}
exports.default = Repositories;
