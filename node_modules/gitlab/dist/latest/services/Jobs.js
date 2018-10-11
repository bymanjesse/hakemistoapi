"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const infrastructure_1 = require("../infrastructure");
class Jobs extends infrastructure_1.BaseService {
    all(projectId, options = {}) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.get(this, `projects/${pId}/jobs`, options);
    }
    cancel(projectId, jobId) {
        const [pId, jId] = [projectId, jobId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.post(this, `projects/${pId}/jobs/${jId}/cancel`);
    }
    downloadSingleArtifactFile(projectId, jobId, artifactPath, options = { stream: false }) {
        const [pId, jId] = [projectId, jobId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.get(this, `projects/${pId}/jobs/${jId}/artifacts/${artifactPath}`, options, { stream: options.stream });
    }
    downloadLatestArtifactFile(projectId, ref, name, options = { stream: false }) {
        const [pId, rId, jobName] = [projectId, ref, name].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.get(this, `projects/${pId}/jobs/artifacts/${rId}/download?job=${jobName}`, options, { stream: options.stream });
    }
    downloadTraceFile(projectId, jobId) {
        const [pId, jId] = [projectId, jobId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.get(this, `projects/${pId}/jobs/${jId}/trace`);
    }
    erase(projectId, jobId) {
        const [pId, jId] = [projectId, jobId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.post(this, `projects/${pId}/jobs/${jId}/erase`);
    }
    keepArtifacts(projectId, jobId) {
        const [pId, jId] = [projectId, jobId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.post(this, `projects/${pId}/jobs/${jId}/artifacts/keep`);
    }
    play(projectId, jobId) {
        const [pId, jId] = [projectId, jobId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.post(this, `projects/${pId}/jobs/${jId}/play`);
    }
    retry(projectId, jobId) {
        const [pId, jId] = [projectId, jobId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.post(this, `projects/${pId}/jobs/${jId}/retry`);
    }
    show(projectId, jobId) {
        const [pId, jId] = [projectId, jobId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.get(this, `projects/${pId}/jobs/${jId}`);
    }
    showPipelineJobs(projectId, pipelineId, options) {
        const [pId, ppId] = [projectId, pipelineId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.get(this, `projects/${pId}/pipelines/${ppId}/jobs`, options);
    }
}
exports.default = Jobs;
