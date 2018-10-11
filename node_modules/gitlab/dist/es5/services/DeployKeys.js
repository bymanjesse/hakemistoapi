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
var DeployKeys = /** @class */ (function (_super) {
    __extends(DeployKeys, _super);
    function DeployKeys() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeployKeys.prototype.add = function (projectId, options) {
        var pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.post(this, "projects/" + pId + "/deploy_keys", options);
    };
    DeployKeys.prototype.all = function (projectId) {
        var pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.get(this, "projects/" + pId + "/deploy_keys");
    };
    DeployKeys.prototype.show = function (projectId, keyId) {
        var _a = [projectId, keyId].map(encodeURIComponent), pId = _a[0], kId = _a[1];
        return infrastructure_1.RequestHelper.get(this, "projects/" + pId + "/deploy_keys/" + kId);
    };
    DeployKeys.prototype.enable = function (projectId, keyId) {
        var _a = [projectId, keyId].map(encodeURIComponent), pId = _a[0], kId = _a[1];
        return infrastructure_1.RequestHelper.post(this, "projects/" + pId + "/deploy_keys/" + kId + "/enable");
    };
    return DeployKeys;
}(infrastructure_1.BaseService));
exports.default = DeployKeys;
