"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const infrastructure_1 = require("../infrastructure");
const Events_1 = require("./Events");
class Projects extends infrastructure_1.BaseService {
    all(options) {
        return infrastructure_1.RequestHelper.get(this, 'projects', options);
    }
    archive(projectId) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.post(this, `projects/${pId}/archive`);
    }
    create(options) {
        const url = options.userId ? `projects/user/${encodeURIComponent(options.userId)}` : 'projects';
        return infrastructure_1.RequestHelper.post(this, url, options);
    }
    edit(projectId, options) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.put(this, `projects/${pId}`, options);
    }
    events(projectId, options) {
        Events_1.validateEventOptions(options.action, options.targetType);
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.get(this, `projects/${pId}/events`, options);
    }
    fork(projectId, options) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.post(this, `projects/${pId}/fork`, options);
    }
    forks(projectId, options) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.get(this, `projects/${pId}/forks`, options);
    }
    languages(projectId) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.get(this, `projects/${pId}/languages`);
    }
    mirrorPull(projectId) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.post(this, `projects/${pId}/mirror/pull`);
    }
    remove(projectId) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.delete(this, `projects/${pId}`);
    }
    search(projectName) {
        return infrastructure_1.RequestHelper.get(this, 'projects', { search: projectName });
    }
    share(projectId, groupId, groupAccess, options) {
        const pId = encodeURIComponent(projectId);
        if (!groupId || !groupAccess)
            throw new Error('Missing required arguments');
        return infrastructure_1.RequestHelper.post(this, `projects/${pId}/share`, Object.assign({ groupId, groupAccess }, options));
    }
    show(projectId, options) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.get(this, `projects/${pId}`, options);
    }
    star(projectId) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.post(this, `projects/${pId}/star`);
    }
    statuses(projectId, sha, state, options) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.post(this, `projects/${pId}/statuses/${sha}`, Object.assign({ state }, options));
    }
    transfer(projectId, namespace) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.put(this, `projects/${pId}/transfer`, namespace);
    }
    unarchive(projectId) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.post(this, `projects/${pId}/unarchive`);
    }
    unshare(projectId, groupId) {
        const [pId, gId] = [projectId, groupId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.delete(this, `projects/${pId}/share${gId}`);
    }
    unstar(projectId) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.post(this, `projects/${pId}/unstar`);
    }
    updatePushRule(projectId, options) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.put(this, `projects/${pId}/push_rule`, options);
    }
    upload(projectId, filePath, { fileName = path_1.default.basename(filePath) } = {}) {
        const pId = encodeURIComponent(projectId);
        const file = fs_1.default.readFileSync(filePath);
        return infrastructure_1.RequestHelper.post(this, `projects/${pId}/uploads`, {
            file: {
                value: file,
                options: {
                    filename: fileName,
                    contentType: 'application/octet-stream',
                },
            },
        }, true);
    }
}
exports.default = Projects;
