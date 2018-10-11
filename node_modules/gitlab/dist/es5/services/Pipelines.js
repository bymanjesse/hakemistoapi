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
var Pipelines = /** @class */ (function (_super) {
    __extends(Pipelines, _super);
    function Pipelines() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pipelines.prototype.all = function (projectId, options) {
        if (options === void 0) { options = {}; }
        var pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.get(this, "projects/" + pId + "/pipelines", options);
    };
    Pipelines.prototype.create = function (projectId, ref) {
        var pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.post(this, "projects/" + pId + "/pipeline", { ref: ref });
    };
    Pipelines.prototype.show = function (projectId, pipelineId) {
        var pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.get(this, "projects/" + pId + "/pipelines/" + pipelineId);
    };
    Pipelines.prototype.retry = function (projectId, pipelineId) {
        var pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.post(this, "projects/" + pId + "/pipelines/" + pipelineId + "/retry");
    };
    Pipelines.prototype.cancel = function (projectId, pipelineId) {
        var pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.post(this, "projects/" + pId + "/pipelines/" + pipelineId + "/cancel");
    };
    Pipelines.prototype.showJobs = function (projectId, pipelineId, options) {
        var pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.get(this, "projects/" + pId + "/pipelines/" + pipelineId + "/jobs", options);
    };
    return Pipelines;
}(infrastructure_1.BaseService));
exports.default = Pipelines;
