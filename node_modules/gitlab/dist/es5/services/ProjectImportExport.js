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
var ProjectImportExport = /** @class */ (function (_super) {
    __extends(ProjectImportExport, _super);
    function ProjectImportExport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProjectImportExport.prototype.download = function (projectId) {
        var pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.get(this, "projects/" + pId + "/export/download");
    };
    ProjectImportExport.prototype.exportStatus = function (projectId) {
        var pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.get(this, "projects/" + pId + "/export");
    };
    ProjectImportExport.prototype.import = function (file, path, options) {
        return infrastructure_1.RequestHelper.post(this, 'projects/import', __assign({ file: file, path: path }, options));
    };
    ProjectImportExport.prototype.importStatus = function (projectId) {
        var pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.get(this, "projects/" + pId + "/import");
    };
    ProjectImportExport.prototype.schedule = function (projectId, options) {
        var pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.post(this, "projects/" + pId + "/export", options);
    };
    return ProjectImportExport;
}(infrastructure_1.BaseService));
exports.default = ProjectImportExport;
