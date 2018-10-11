"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const infrastructure_1 = require("../infrastructure");
class GroupProjects extends infrastructure_1.BaseService {
    all(groupId, options) {
        const gId = encodeURIComponent(groupId);
        return infrastructure_1.RequestHelper.get(this, `groups/${gId}/projects`, options);
    }
    add(groupId, projectId) {
        const [gId, pId] = [groupId, projectId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.post(this, `groups/${gId}/projects/${pId}`);
    }
}
exports.default = GroupProjects;
