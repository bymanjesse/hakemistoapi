"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const infrastructure_1 = require("../infrastructure");
class Tags extends infrastructure_1.BaseService {
    all(projectId, options) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.get(this, `projects/${pId}/repository/tags`, options);
    }
    create(projectId, options) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.post(this, `projects/${pId}/repository/tags`, options);
    }
    remove(projectId, tagName) {
        const [pId, tId] = [projectId, tagName].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.delete(this, `projects/${pId}/repository/tags/${tId}`);
    }
    show(projectId, tagName) {
        const [pId, tId] = [projectId, tagName].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.get(this, `projects/${pId}/repository/tags/${tId}`);
    }
}
exports.default = Tags;
