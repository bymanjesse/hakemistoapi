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
var RepositoryFiles = /** @class */ (function (_super) {
    __extends(RepositoryFiles, _super);
    function RepositoryFiles() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RepositoryFiles.prototype.create = function (projectId, filePath, branch, options) {
        var _a = [projectId, filePath].map(encodeURIComponent), pId = _a[0], path = _a[1];
        return infrastructure_1.RequestHelper.post(this, "projects/" + pId + "/repository/files/" + path, __assign({ branch: branch }, options));
    };
    RepositoryFiles.prototype.edit = function (projectId, filePath, branch, options) {
        var _a = [projectId, filePath].map(encodeURIComponent), pId = _a[0], path = _a[1];
        return infrastructure_1.RequestHelper.put(this, "projects/" + pId + "/repository/files/" + path, __assign({ branch: branch }, options));
    };
    RepositoryFiles.prototype.remove = function (projectId, filePath, branch, options) {
        var _a = [projectId, filePath].map(encodeURIComponent), pId = _a[0], path = _a[1];
        return infrastructure_1.RequestHelper.delete(this, "projects/" + pId + "/repository/files/" + path, __assign({ branch: branch }, options));
    };
    RepositoryFiles.prototype.show = function (projectId, filePath, ref) {
        var _a = [projectId, filePath].map(encodeURIComponent), pId = _a[0], path = _a[1];
        return infrastructure_1.RequestHelper.get(this, "projects/" + pId + "/repository/files/" + path, {
            ref: ref,
        });
    };
    RepositoryFiles.prototype.showRaw = function (projectId, filePath, ref) {
        var _a = [projectId, filePath].map(encodeURIComponent), pId = _a[0], path = _a[1];
        return infrastructure_1.RequestHelper.get(this, "projects/" + pId + "/repository/files/" + path + "/raw", { ref: ref });
    };
    return RepositoryFiles;
}(infrastructure_1.BaseService));
exports.default = RepositoryFiles;
