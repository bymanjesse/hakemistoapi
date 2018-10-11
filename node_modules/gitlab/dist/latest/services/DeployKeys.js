"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const infrastructure_1 = require("../infrastructure");
class DeployKeys extends infrastructure_1.BaseService {
    add(projectId, options) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.post(this, `projects/${pId}/deploy_keys`, options);
    }
    all(projectId) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.get(this, `projects/${pId}/deploy_keys`);
    }
    show(projectId, keyId) {
        const [pId, kId] = [projectId, keyId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.get(this, `projects/${pId}/deploy_keys/${kId}`);
    }
    enable(projectId, keyId) {
        const [pId, kId] = [projectId, keyId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.post(this, `projects/${pId}/deploy_keys/${kId}/enable`);
    }
}
exports.default = DeployKeys;
