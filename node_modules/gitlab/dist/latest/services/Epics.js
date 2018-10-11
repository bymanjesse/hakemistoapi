"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const infrastructure_1 = require("../infrastructure");
class Epics extends infrastructure_1.BaseService {
    all(groupId) {
        const gId = encodeURIComponent(groupId);
        return infrastructure_1.RequestHelper.get(this, `groups/${gId}/epics`);
    }
    create(groupId, title, options) {
        const gId = encodeURIComponent(groupId);
        return infrastructure_1.RequestHelper.post(this, `groups/${gId}/epics`, Object.assign({ title }, options));
    }
    edit(groupId, epicId, options) {
        const [gId, eId] = [groupId, epicId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.put(this, `groups/${gId}/epics/${eId}`, options);
    }
    remove(groupId, epicId) {
        const [gId, eId] = [groupId, epicId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.delete(this, `groups/${gId}/epics/${eId}`);
    }
    show(groupId, epicId) {
        const [gId, eId] = [groupId, epicId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.get(this, `groups/${gId}/epics/${eId}`);
    }
}
exports.default = Epics;
