"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const infrastructure_1 = require("../infrastructure");
class Groups extends infrastructure_1.BaseService {
    all(options) {
        return infrastructure_1.RequestHelper.get(this, 'groups', options);
    }
    create(options) {
        return infrastructure_1.RequestHelper.post(this, 'groups', options);
    }
    remove(groupId) {
        const gId = encodeURIComponent(groupId);
        return infrastructure_1.RequestHelper.delete(this, `groups/${gId}`);
    }
    search(nameOrPath) {
        return infrastructure_1.RequestHelper.get(this, 'groups', {
            search: nameOrPath,
        });
    }
    show(groupId) {
        const gId = encodeURIComponent(groupId);
        return infrastructure_1.RequestHelper.get(this, `groups/${gId}`);
    }
    subgroups(groupId, options) {
        const gId = encodeURIComponent(groupId);
        return infrastructure_1.RequestHelper.get(this, `groups/${gId}/subgroups`, options);
    }
}
exports.default = Groups;
