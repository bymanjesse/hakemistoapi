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
var VISIBILITY_LEVELS = {
    PRIVATE: 'private',
    INTERNAL: 'internal',
    PUBLIC: 'public',
};
exports.VISIBILITY_LEVELS = VISIBILITY_LEVELS;
var ProjectSnippets = /** @class */ (function (_super) {
    __extends(ProjectSnippets, _super);
    function ProjectSnippets() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProjectSnippets.prototype.all = function (projectId, options) {
        if (options === void 0) { options = {}; }
        var pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.get(this, "projects/" + pId + "/snippets", options);
    };
    ProjectSnippets.prototype.content = function (projectId, snippetId) {
        var _a = [projectId, snippetId].map(encodeURIComponent), pId = _a[0], sId = _a[1];
        return infrastructure_1.RequestHelper.get(this, "projects/" + pId + "/snippets/" + sId + "/raw");
    };
    ProjectSnippets.prototype.create = function (projectId, title, fileName, code, visibility, options) {
        if (options === void 0) { options = {}; }
        var pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.post(this, "projects/" + pId + "/snippets", __assign({ title: title,
            fileName: fileName,
            code: code,
            visibility: visibility }, options));
    };
    ProjectSnippets.prototype.edit = function (projectId, snippetId, options) {
        var _a = [projectId, snippetId].map(encodeURIComponent), pId = _a[0], sId = _a[1];
        return infrastructure_1.RequestHelper.put(this, "projects/" + pId + "/snippets/" + sId, options);
    };
    ProjectSnippets.prototype.remove = function (projectId, snippetId) {
        var _a = [projectId, snippetId].map(encodeURIComponent), pId = _a[0], sId = _a[1];
        return infrastructure_1.RequestHelper.delete(this, "projects/" + pId + "/snippets/" + sId);
    };
    ProjectSnippets.prototype.show = function (projectId, snippetId) {
        var _a = [projectId, snippetId].map(encodeURIComponent), pId = _a[0], sId = _a[1];
        return infrastructure_1.RequestHelper.get(this, "projects/" + pId + "/snippets/" + sId);
    };
    ProjectSnippets.prototype.userAgentDetails = function (projectId, snippetId) {
        var _a = [projectId, snippetId].map(encodeURIComponent), pId = _a[0], sId = _a[1];
        return infrastructure_1.RequestHelper.get(this, "projects/" + pId + "/snippets/" + sId + "/user_agent_detail");
    };
    return ProjectSnippets;
}(infrastructure_1.BaseService));
exports.default = ProjectSnippets;
