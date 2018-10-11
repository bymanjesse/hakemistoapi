"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const infrastructure_1 = require("../infrastructure");
class Pipelines extends infrastructure_1.BaseService {
    all(projectId, options = {}) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.get(this, `projects/${pId}/pipelines`, options);
    }
    create(projectId, ref) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.post(this, `projects/${pId}/pipeline`, { ref });
    }
    show(projectId, pipelineId) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.get(this, `projects/${pId}/pipelines/${pipelineId}`);
    }
    retry(projectId, pipelineId) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.post(this, `projects/${pId}/pipelines/${pipelineId}/retry`);
    }
    cancel(projectId, pipelineId) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.post(this, `projects/${pId}/pipelines/${pipelineId}/cancel`);
    }
    showJobs(projectId, pipelineId, options) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.get(this, `projects/${pId}/pipelines/${pipelineId}/jobs`, options);
    }
}
exports.default = Pipelines;
