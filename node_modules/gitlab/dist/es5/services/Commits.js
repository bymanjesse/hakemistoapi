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
Object.defineProperty(exports, "__esModule", { value: true });
var infrastructure_1 = require("../infrastructure");
var Commits = /** @class */ (function (_super) {
    __extends(Commits, _super);
    function Commits() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Commits.prototype.all = function (projectId, options) {
        var pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.get(this, "projects/" + pId + "/repository/commits", options);
    };
    Commits.prototype.cherryPick = function (projectId, sha, branch) {
        var pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.post(this, "projects/" + pId + "/repository/commits/" + sha + "/cherry_pick", { branch: branch });
    };
    Commits.prototype.comments = function (projectId, sha) {
        var pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.get(this, "projects/" + pId + "/repository/commits/" + sha + "/comments");
    };
    Commits.prototype.create = function (projectId, branch, message, actions, options) {
        if (actions === void 0) { actions = []; }
        var pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.post(this, "projects/" + pId + "/repository/commits", __assign({ branch: branch, commitMessage: message, actions: actions }, options));
    };
    Commits.prototype.createComment = function (projectId, sha, note, options) {
        var pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.post(this, "projects/" + pId + "/repository/commits/" + sha + "/comments", __assign({ note: note }, options));
    };
    Commits.prototype.diff = function (projectId, sha) {
        var pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.get(this, "projects/" + pId + "/repository/commits/" + sha + "/diff");
    };
    Commits.prototype.editStatus = function (projectId, sha, options) {
        var pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.post(this, "projects/" + pId + "/statuses/" + sha, options);
    };
    Commits.prototype.references = function (projectId, sha) {
        var pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.get(this, "projects/" + pId + "/repository/commits/" + sha + "/refs");
    };
    Commits.prototype.show = function (projectId, sha, options) {
        var pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.get(this, "projects/" + pId + "/repository/commits/" + sha, options);
    };
    Commits.prototype.status = function (projectId, sha, options) {
        var pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.get(this, "projects/" + pId + "/repository/commits/" + sha + "/statuses", options);
    };
    return Commits;
}(infrastructure_1.BaseService));
exports.default = Commits;
