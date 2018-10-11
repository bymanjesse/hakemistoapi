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
Object.defineProperty(exports, "__esModule", { value: true });
var infrastructure_1 = require("../infrastructure");
var Jobs = /** @class */ (function (_super) {
    __extends(Jobs, _super);
    function Jobs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Jobs.prototype.all = function (projectId, options) {
        if (options === void 0) { options = {}; }
        var pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.get(this, "projects/" + pId + "/jobs", options);
    };
    Jobs.prototype.cancel = function (projectId, jobId) {
        var _a = [projectId, jobId].map(encodeURIComponent), pId = _a[0], jId = _a[1];
        return infrastructure_1.RequestHelper.post(this, "projects/" + pId + "/jobs/" + jId + "/cancel");
    };
    Jobs.prototype.downloadSingleArtifactFile = function (projectId, jobId, artifactPath, options) {
        if (options === void 0) { options = { stream: false }; }
        var _a = [projectId, jobId].map(encodeURIComponent), pId = _a[0], jId = _a[1];
        return infrastructure_1.RequestHelper.get(this, "projects/" + pId + "/jobs/" + jId + "/artifacts/" + artifactPath, options, { stream: options.stream });
    };
    Jobs.prototype.downloadLatestArtifactFile = function (projectId, ref, name, options) {
        if (options === void 0) { options = { stream: false }; }
        var _a = [projectId, ref, name].map(encodeURIComponent), pId = _a[0], rId = _a[1], jobName = _a[2];
        return infrastructure_1.RequestHelper.get(this, "projects/" + pId + "/jobs/artifacts/" + rId + "/download?job=" + jobName, options, { stream: options.stream });
    };
    Jobs.prototype.downloadTraceFile = function (projectId, jobId) {
        var _a = [projectId, jobId].map(encodeURIComponent), pId = _a[0], jId = _a[1];
        return infrastructure_1.RequestHelper.get(this, "projects/" + pId + "/jobs/" + jId + "/trace");
    };
    Jobs.prototype.erase = function (projectId, jobId) {
        var _a = [projectId, jobId].map(encodeURIComponent), pId = _a[0], jId = _a[1];
        return infrastructure_1.RequestHelper.post(this, "projects/" + pId + "/jobs/" + jId + "/erase");
    };
    Jobs.prototype.keepArtifacts = function (projectId, jobId) {
        var _a = [projectId, jobId].map(encodeURIComponent), pId = _a[0], jId = _a[1];
        return infrastructure_1.RequestHelper.post(this, "projects/" + pId + "/jobs/" + jId + "/artifacts/keep");
    };
    Jobs.prototype.play = function (projectId, jobId) {
        var _a = [projectId, jobId].map(encodeURIComponent), pId = _a[0], jId = _a[1];
        return infrastructure_1.RequestHelper.post(this, "projects/" + pId + "/jobs/" + jId + "/play");
    };
    Jobs.prototype.retry = function (projectId, jobId) {
        var _a = [projectId, jobId].map(encodeURIComponent), pId = _a[0], jId = _a[1];
        return infrastructure_1.RequestHelper.post(this, "projects/" + pId + "/jobs/" + jId + "/retry");
    };
    Jobs.prototype.show = function (projectId, jobId) {
        var _a = [projectId, jobId].map(encodeURIComponent), pId = _a[0], jId = _a[1];
        return infrastructure_1.RequestHelper.get(this, "projects/" + pId + "/jobs/" + jId);
    };
    Jobs.prototype.showPipelineJobs = function (projectId, pipelineId, options) {
        var _a = [projectId, pipelineId].map(encodeURIComponent), pId = _a[0], ppId = _a[1];
        return infrastructure_1.RequestHelper.get(this, "projects/" + pId + "/pipelines/" + ppId + "/jobs", options);
    };
    return Jobs;
}(infrastructure_1.BaseService));
exports.default = Jobs;
