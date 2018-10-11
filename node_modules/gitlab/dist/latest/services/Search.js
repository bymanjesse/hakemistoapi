"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const infrastructure_1 = require("../infrastructure");
class Search extends infrastructure_1.BaseService {
    all(scope, search, { projectId, groupId } = {}) {
        let url = '';
        if (projectId) {
            url += `projects/${encodeURIComponent(projectId)}/`;
        }
        else if (groupId) {
            url += `groups/${encodeURIComponent(groupId)}/`;
        }
        return infrastructure_1.RequestHelper.get(this, `${url}search`, { scope, search });
    }
}
exports.default = Search;
