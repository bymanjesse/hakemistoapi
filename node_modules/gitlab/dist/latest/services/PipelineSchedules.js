"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const infrastructure_1 = require("../infrastructure");
class PipelineSchedules extends infrastructure_1.BaseService {
    all(projectId, options) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.get(this, `projects/${pId}/pipeline_schedules`, options);
    }
    create(projectId, description, ref, cron, options) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.post(this, `projects/${pId}/pipeline_schedules`, Object.assign({ description,
            ref,
            cron }, options));
    }
    edit(projectId, scheduleId, options) {
        const [pId, sId] = [projectId, scheduleId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.put(this, `projects/${pId}/pipeline_schedules/${sId}`, options);
    }
    remove(projectId, scheduleId) {
        const [pId, sId] = [projectId, scheduleId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.delete(this, `projects/${pId}/pipeline_schedules/${sId}`);
    }
    show(projectId, scheduleId) {
        const [pId, sId] = [projectId, scheduleId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.get(this, `projects/${pId}/pipeline_schedules/${sId}`);
    }
    takeOwnership(projectId, scheduleId) {
        const [pId, sId] = [projectId, scheduleId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.post(this, `projects/${pId}/pipeline_schedules/${sId}/take_ownership`);
    }
}
exports.default = PipelineSchedules;
