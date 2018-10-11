"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const infrastructure_1 = require("../infrastructure");
class PagesDomains extends infrastructure_1.BaseService {
    all({ projectId } = {}) {
        const url = projectId ? `projects/${encodeURIComponent(projectId)}/` : '';
        return infrastructure_1.RequestHelper.get(this, `${url}pages/domains`);
    }
    create(projectId, domain, options) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.post(this, `projects/${pId}/pages/domains`, Object.assign({ domain }, options));
    }
    edit(projectId, domain, options) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.put(this, `projects/${pId}/pages/domains/${domain}`, options);
    }
    show(projectId, domain) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.get(this, `projects/${pId}/pages/domains/${domain}`);
    }
    remove(projectId, domain) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.delete(this, `projects/${pId}/pages/domains/${domain}`);
    }
}
exports.default = PagesDomains;
