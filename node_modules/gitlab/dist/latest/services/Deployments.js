"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const infrastructure_1 = require("../infrastructure");
class Deployments extends infrastructure_1.BaseService {
    all(projectId, options) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.get(this, `projects/${pId}/deployments`, options);
    }
    show(projectId, deploymentId) {
        const [pId, dId] = [projectId, deploymentId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.post(this, `projects/${pId}/deployments/${dId}`);
    }
}
exports.default = Deployments;
