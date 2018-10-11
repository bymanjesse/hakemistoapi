"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const infrastructure_1 = require("../infrastructure");
const VISIBILITY_LEVELS = {
    PRIVATE: 'private',
    INTERNAL: 'internal',
    PUBLIC: 'public',
};
exports.VISIBILITY_LEVELS = VISIBILITY_LEVELS;
class ProjectSnippets extends infrastructure_1.BaseService {
    all(projectId, options = {}) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.get(this, `projects/${pId}/snippets`, options);
    }
    content(projectId, snippetId) {
        const [pId, sId] = [projectId, snippetId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.get(this, `projects/${pId}/snippets/${sId}/raw`);
    }
    create(projectId, title, fileName, code, visibility, options = {}) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.post(this, `projects/${pId}/snippets`, Object.assign({ title,
            fileName,
            code,
            visibility }, options));
    }
    edit(projectId, snippetId, options) {
        const [pId, sId] = [projectId, snippetId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.put(this, `projects/${pId}/snippets/${sId}`, options);
    }
    remove(projectId, snippetId) {
        const [pId, sId] = [projectId, snippetId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.delete(this, `projects/${pId}/snippets/${sId}`);
    }
    show(projectId, snippetId) {
        const [pId, sId] = [projectId, snippetId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.get(this, `projects/${pId}/snippets/${sId}`);
    }
    userAgentDetails(projectId, snippetId) {
        const [pId, sId] = [projectId, snippetId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.get(this, `projects/${pId}/snippets/${sId}/user_agent_detail`);
    }
}
exports.default = ProjectSnippets;
