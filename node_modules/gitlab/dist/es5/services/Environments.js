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
var Environments = /** @class */ (function (_super) {
    __extends(Environments, _super);
    function Environments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Environments.prototype.all = function (projectId, options) {
        var pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.get(this, "projects/" + pId + "/environments", options);
    };
    Environments.prototype.create = function (projectId, options) {
        var pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.post(this, "projects/" + pId + "/environments", options);
    };
    Environments.prototype.edit = function (projectId, environmentId, options) {
        var _a = [projectId, environmentId].map(encodeURIComponent), pId = _a[0], eId = _a[1];
        return infrastructure_1.RequestHelper.put(this, "projects/" + pId + "/environments/" + eId, options);
    };
    Environments.prototype.remove = function (projectId, environmentId) {
        var _a = [projectId, environmentId].map(encodeURIComponent), pId = _a[0], eId = _a[1];
        return infrastructure_1.RequestHelper.delete(this, "projects/" + pId + "/environments/" + eId);
    };
    Environments.prototype.stop = function (projectId, environmentId) {
        var _a = [projectId, environmentId].map(encodeURIComponent), pId = _a[0], eId = _a[1];
        return infrastructure_1.RequestHelper.post(this, "projects/" + pId + "/environments/" + eId + "/stop");
    };
    return Environments;
}(infrastructure_1.BaseService));
exports.default = Environments;
