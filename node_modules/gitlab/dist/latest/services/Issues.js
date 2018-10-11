"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const infrastructure_1 = require("../infrastructure");
class Issues extends infrastructure_1.BaseService {
    addSpentTime(projectId, issueId, duration) {
        const [pId, iId] = [projectId, issueId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.post(this, `projects/${pId}/issues/${iId}/add_spent_time`, {
            duration,
        });
    }
    addTimeEstimate(projectId, issueId, duration) {
        const [pId, iId] = [projectId, issueId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.post(this, `projects/${pId}/issues/${iId}/time_estimate`, {
            duration,
        });
    }
    all(_a) {
        var { projectId } = _a, options = __rest(_a, ["projectId"]);
        const url = projectId ? `projects/${encodeURIComponent(projectId)}/issues` : 'issues';
        return infrastructure_1.RequestHelper.get(this, url, options);
    }
    create(projectId, options) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.post(this, `projects/${pId}/issues`, options);
    }
    edit(projectId, issueId, options) {
        const [pId, iId] = [projectId, issueId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.put(this, `projects/${pId}/issues/${iId}`, options);
    }
    link(projectId, issueIId, targetProjectId, targetIssueId, options = {}) {
        const [pId, iId] = [projectId, issueIId].map(encodeURIComponent);
        const [targetpId, targetIId] = [targetProjectId, targetIssueId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.post(this, `projects/${pId}/issues/${iId}/links`, Object.assign({ targetProjectId: targetpId, targetIssueId: targetIId }, options));
    }
    participants(projectId, issueId) {
        const [pId, iId] = [projectId, issueId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.get(this, `projects/${pId}/issues/${iId}/participants`);
    }
    remove(projectId, issueId) {
        const [pId, iId] = [projectId, issueId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.delete(this, `projects/${pId}/issues/${iId}`);
    }
    resetSpentTime(projectId, mergerequestId) {
        const [pId, mId] = [projectId, mergerequestId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.post(this, `projects/${pId}/issues/${mId}/reset_spent_time`);
    }
    resetTimeEstimate(projectId, mergerequestId) {
        const [pId, mId] = [projectId, mergerequestId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.post(this, `projects/${pId}/issues/${mId}/reset_time_estimate`);
    }
    show(projectId, issueId) {
        const [pId, iId] = [projectId, issueId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.get(this, `projects/${pId}/issues/${iId}`);
    }
    subscribe(projectId, issueId, options) {
        const [pId, iId] = [projectId, issueId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.post(this, `projects/${pId}/issues/${iId}/subscribe`, options);
    }
    timeStats(projectId, mergerequestId) {
        const [pId, mId] = [projectId, mergerequestId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.get(this, `projects/${pId}/issues/${mId}/time_stats`);
    }
    unsubscribe(projectId, issueId) {
        const [pId, iId] = [projectId, issueId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.delete(this, `projects/${pId}/issues/${iId}/unsubscribe`);
    }
}
exports.default = Issues;
