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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var infrastructure_1 = require("../infrastructure");
var Events_1 = require("./Events");
var Projects = /** @class */ (function (_super) {
    __extends(Projects, _super);
    function Projects() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Projects.prototype.all = function (options) {
        return infrastructure_1.RequestHelper.get(this, 'projects', options);
    };
    Projects.prototype.archive = function (projectId) {
        var pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.post(this, "projects/" + pId + "/archive");
    };
    Projects.prototype.create = function (options) {
        var url = options.userId ? "projects/user/" + encodeURIComponent(options.userId) : 'projects';
        return infrastructure_1.RequestHelper.post(this, url, options);
    };
    Projects.prototype.edit = function (projectId, options) {
        var pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.put(this, "projects/" + pId, options);
    };
    Projects.prototype.events = function (projectId, options) {
        Events_1.validateEventOptions(options.action, options.targetType);
        var pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.get(this, "projects/" + pId + "/events", options);
    };
    Projects.prototype.fork = function (projectId, options) {
        var pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.post(this, "projects/" + pId + "/fork", options);
    };
    Projects.prototype.forks = function (projectId, options) {
        var pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.get(this, "projects/" + pId + "/forks", options);
    };
    Projects.prototype.languages = function (projectId) {
        var pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.get(this, "projects/" + pId + "/languages");
    };
    Projects.prototype.mirrorPull = function (projectId) {
        var pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.post(this, "projects/" + pId + "/mirror/pull");
    };
    Projects.prototype.remove = function (projectId) {
        var pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.delete(this, "projects/" + pId);
    };
    Projects.prototype.search = function (projectName) {
        return infrastructure_1.RequestHelper.get(this, 'projects', { search: projectName });
    };
    Projects.prototype.share = function (projectId, groupId, groupAccess, options) {
        var pId = encodeURIComponent(projectId);
        if (!groupId || !groupAccess)
            throw new Error('Missing required arguments');
        return infrastructure_1.RequestHelper.post(this, "projects/" + pId + "/share", __assign({ groupId: groupId, groupAccess: groupAccess }, options));
    };
    Projects.prototype.show = function (projectId, options) {
        var pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.get(this, "projects/" + pId, options);
    };
    Projects.prototype.star = function (projectId) {
        var pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.post(this, "projects/" + pId + "/star");
    };
    Projects.prototype.statuses = function (projectId, sha, state, options) {
        var pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.post(this, "projects/" + pId + "/statuses/" + sha, __assign({ state: state }, options));
    };
    Projects.prototype.transfer = function (projectId, namespace) {
        var pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.put(this, "projects/" + pId + "/transfer", namespace);
    };
    Projects.prototype.unarchive = function (projectId) {
        var pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.post(this, "projects/" + pId + "/unarchive");
    };
    Projects.prototype.unshare = function (projectId, groupId) {
        var _a = [projectId, groupId].map(encodeURIComponent), pId = _a[0], gId = _a[1];
        return infrastructure_1.RequestHelper.delete(this, "projects/" + pId + "/share" + gId);
    };
    Projects.prototype.unstar = function (projectId) {
        var pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.post(this, "projects/" + pId + "/unstar");
    };
    Projects.prototype.updatePushRule = function (projectId, options) {
        var pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.put(this, "projects/" + pId + "/push_rule", options);
    };
    Projects.prototype.upload = function (projectId, filePath, _a) {
        var _b = (_a === void 0 ? {} : _a).fileName, fileName = _b === void 0 ? path_1.default.basename(filePath) : _b;
        var pId = encodeURIComponent(projectId);
        var file = fs_1.default.readFileSync(filePath);
        return infrastructure_1.RequestHelper.post(this, "projects/" + pId + "/uploads", {
            file: {
                value: file,
                options: {
                    filename: fileName,
                    contentType: 'application/octet-stream',
                },
            },
        }, true);
    };
    return Projects;
}(infrastructure_1.BaseService));
exports.default = Projects;
