"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var infrastructure_1 = require("../infrastructure");
var Issues = /** @class */ (function (_super) {
    __extends(Issues, _super);
    function Issues() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Issues.prototype.addSpentTime = function (projectId, issueId, duration) {
        var _a = [projectId, issueId].map(encodeURIComponent), pId = _a[0], iId = _a[1];
        return infrastructure_1.RequestHelper.post(this, "projects/" + pId + "/issues/" + iId + "/add_spent_time", {
            duration: duration,
        });
    };
    Issues.prototype.addTimeEstimate = function (projectId, issueId, duration) {
        var _a = [projectId, issueId].map(encodeURIComponent), pId = _a[0], iId = _a[1];
        return infrastructure_1.RequestHelper.post(this, "projects/" + pId + "/issues/" + iId + "/time_estimate", {
            duration: duration,
        });
    };
    Issues.prototype.all = function (_a) {
        var projectId = _a.projectId, options = __rest(_a, ["projectId"]);
        var url = projectId ? "projects/" + encodeURIComponent(projectId) + "/issues" : 'issues';
        return infrastructure_1.RequestHelper.get(this, url, options);
    };
    Issues.prototype.create = function (projectId, options) {
        var pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.post(this, "projects/" + pId + "/issues", options);
    };
    Issues.prototype.edit = function (projectId, issueId, options) {
        var _a = [projectId, issueId].map(encodeURIComponent), pId = _a[0], iId = _a[1];
        return infrastructure_1.RequestHelper.put(this, "projects/" + pId + "/issues/" + iId, options);
    };
    Issues.prototype.link = function (projectId, issueIId, targetProjectId, targetIssueId, options) {
        if (options === void 0) { options = {}; }
        var _a = [projectId, issueIId].map(encodeURIComponent), pId = _a[0], iId = _a[1];
        var _b = [targetProjectId, targetIssueId].map(encodeURIComponent), targetpId = _b[0], targetIId = _b[1];
        return infrastructure_1.RequestHelper.post(this, "projects/" + pId + "/issues/" + iId + "/links", __assign({ targetProjectId: targetpId, targetIssueId: targetIId }, options));
    };
    Issues.prototype.participants = function (projectId, issueId) {
        var _a = [projectId, issueId].map(encodeURIComponent), pId = _a[0], iId = _a[1];
        return infrastructure_1.RequestHelper.get(this, "projects/" + pId + "/issues/" + iId + "/participants");
    };
    Issues.prototype.remove = function (projectId, issueId) {
        var _a = [projectId, issueId].map(encodeURIComponent), pId = _a[0], iId = _a[1];
        return infrastructure_1.RequestHelper.delete(this, "projects/" + pId + "/issues/" + iId);
    };
    Issues.prototype.resetSpentTime = function (projectId, mergerequestId) {
        var _a = [projectId, mergerequestId].map(encodeURIComponent), pId = _a[0], mId = _a[1];
        return infrastructure_1.RequestHelper.post(this, "projects/" + pId + "/issues/" + mId + "/reset_spent_time");
    };
    Issues.prototype.resetTimeEstimate = function (projectId, mergerequestId) {
        var _a = [projectId, mergerequestId].map(encodeURIComponent), pId = _a[0], mId = _a[1];
        return infrastructure_1.RequestHelper.post(this, "projects/" + pId + "/issues/" + mId + "/reset_time_estimate");
    };
    Issues.prototype.show = function (projectId, issueId) {
        var _a = [projectId, issueId].map(encodeURIComponent), pId = _a[0], iId = _a[1];
        return infrastructure_1.RequestHelper.get(this, "projects/" + pId + "/issues/" + iId);
    };
    Issues.prototype.subscribe = function (projectId, issueId, options) {
        var _a = [projectId, issueId].map(encodeURIComponent), pId = _a[0], iId = _a[1];
        return infrastructure_1.RequestHelper.post(this, "projects/" + pId + "/issues/" + iId + "/subscribe", options);
    };
    Issues.prototype.timeStats = function (projectId, mergerequestId) {
        var _a = [projectId, mergerequestId].map(encodeURIComponent), pId = _a[0], mId = _a[1];
        return infrastructure_1.RequestHelper.get(this, "projects/" + pId + "/issues/" + mId + "/time_stats");
    };
    Issues.prototype.unsubscribe = function (projectId, issueId) {
        var _a = [projectId, issueId].map(encodeURIComponent), pId = _a[0], iId = _a[1];
        return infrastructure_1.RequestHelper.delete(this, "projects/" + pId + "/issues/" + iId + "/unsubscribe");
    };
    return Issues;
}(infrastructure_1.BaseService));
exports.default = Issues;
