"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const infrastructure_1 = require("../infrastructure");
class Environments extends infrastructure_1.BaseService {
    all(projectId, options) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.get(this, `projects/${pId}/environments`, options);
    }
    create(projectId, options) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.post(this, `projects/${pId}/environments`, options);
    }
    edit(projectId, environmentId, options) {
        const [pId, eId] = [projectId, environmentId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.put(this, `projects/${pId}/environments/${eId}`, options);
    }
    remove(projectId, environmentId) {
        const [pId, eId] = [projectId, environmentId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.delete(this, `projects/${pId}/environments/${eId}`);
    }
    stop(projectId, environmentId) {
        const [pId, eId] = [projectId, environmentId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.post(this, `projects/${pId}/environments/${eId}/stop`);
    }
}
exports.default = Environments;
