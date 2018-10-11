"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const infrastructure_1 = require("../infrastructure");
class Wikis extends infrastructure_1.BaseService {
    all(projectId, options) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.get(this, `projects/${pId}/wikis`, options);
    }
    create(projectId, options) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.post(this, `projects/${pId}/wikis`, options);
    }
    edit(projectId, slug, options) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.put(this, `projects/${pId}/wikis/${slug}`, options);
    }
    show(projectId, slug) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.get(this, `projects/${pId}/wikis/${slug}`);
    }
    remove(projectId, slug) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.delete(this, `projects/${pId}/wikis/${slug}`);
    }
}
exports.default = Wikis;
