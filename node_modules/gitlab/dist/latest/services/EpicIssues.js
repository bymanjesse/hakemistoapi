"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const infrastructure_1 = require("../infrastructure");
class EpicIssues extends infrastructure_1.BaseService {
    all(groupId, epicId) {
        const [gId, eId] = [groupId, epicId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.get(this, `groups/${gId}/epics/${eId}/issues`);
    }
    assign(groupId, epicId, issueId) {
        const [gId, eId, iId] = [groupId, epicId, issueId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.put(this, `groups/${gId}/epics/${eId}/issues/${iId}`);
    }
    edit(groupId, epicId, issueId, options) {
        const [gId, eId, iId] = [groupId, epicId, issueId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.delete(this, `groups/${gId}/epics/${eId}/issues/${iId}`, options);
    }
    remove(groupId, epicId, issueId) {
        const [gId, eId, iId] = [groupId, epicId, issueId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.delete(this, `groups/${gId}/epics/${eId}/issues/${iId}`);
    }
}
exports.default = EpicIssues;
