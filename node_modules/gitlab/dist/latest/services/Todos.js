"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const infrastructure_1 = require("../infrastructure");
class Todos extends infrastructure_1.BaseService {
    all(options) {
        return infrastructure_1.RequestHelper.get(this, 'todos', options);
    }
    create(projectId, mergerequestId) {
        const [pId, mId] = [projectId, mergerequestId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.post(this, `projects/${pId}/merge_requests/${mId}/todo`);
    }
    done({ todoId } = {}) {
        const tId = encodeURIComponent(todoId);
        return infrastructure_1.RequestHelper.delete(this, `todos/${tId}/mark_as_done`);
    }
}
exports.default = Todos;
