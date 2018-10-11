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
class Runners extends infrastructure_1.BaseService {
    all(_a = {}) {
        var { projectId } = _a, options = __rest(_a, ["projectId"]);
        const url = projectId ? `projects/${encodeURIComponent(projectId)}/runners` : 'runners/all';
        return infrastructure_1.RequestHelper.get(this, url, options);
    }
    allOwned(options) {
        return infrastructure_1.RequestHelper.get(this, 'runners', options);
    }
    edit(runnerId, attributes) {
        const rId = encodeURIComponent(runnerId);
        return infrastructure_1.RequestHelper.put(this, `runners/${rId}`, attributes);
    }
    enable(projectId, runnerId) {
        const [pId, rId] = [projectId, runnerId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.post(this, `projects/${pId}/runners`, { runnerId: rId });
    }
    disable(projectId, runnerId) {
        const [pId, rId] = [projectId, runnerId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.delete(this, `projects/${pId}/runners/${rId}`);
    }
    jobs(runnerId) {
        const rId = encodeURIComponent(runnerId);
        return infrastructure_1.RequestHelper.get(this, `runners/${rId}/jobs`);
    }
    remove(runnerId) {
        const rId = encodeURIComponent(runnerId);
        return infrastructure_1.RequestHelper.delete(this, `runners/${rId}`);
    }
    show(runnerId) {
        const rId = encodeURIComponent(runnerId);
        return infrastructure_1.RequestHelper.get(this, `runners/${rId}`);
    }
}
exports.default = Runners;
