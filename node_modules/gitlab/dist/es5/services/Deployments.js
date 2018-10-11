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
var Deployments = /** @class */ (function (_super) {
    __extends(Deployments, _super);
    function Deployments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Deployments.prototype.all = function (projectId, options) {
        var pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.get(this, "projects/" + pId + "/deployments", options);
    };
    Deployments.prototype.show = function (projectId, deploymentId) {
        var _a = [projectId, deploymentId].map(encodeURIComponent), pId = _a[0], dId = _a[1];
        return infrastructure_1.RequestHelper.post(this, "projects/" + pId + "/deployments/" + dId);
    };
    return Deployments;
}(infrastructure_1.BaseService));
exports.default = Deployments;
