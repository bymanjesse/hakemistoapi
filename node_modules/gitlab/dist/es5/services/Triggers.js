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
var Triggers = /** @class */ (function (_super) {
    __extends(Triggers, _super);
    function Triggers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Triggers.prototype.add = function (projectId, options) {
        var pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.post(this, "projects/" + pId + "/triggers", options);
    };
    Triggers.prototype.all = function (projectId) {
        var pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.get(this, "projects/" + pId + "/triggers");
    };
    Triggers.prototype.edit = function (projectId, triggerId, options) {
        var _a = [projectId, triggerId].map(encodeURIComponent), pId = _a[0], tId = _a[1];
        return infrastructure_1.RequestHelper.put(this, "projects/" + pId + "/triggers/" + tId, options);
    };
    Triggers.prototype.remove = function (projectId, triggerId) {
        var _a = [projectId, triggerId].map(encodeURIComponent), pId = _a[0], tId = _a[1];
        return infrastructure_1.RequestHelper.delete(this, "projects/" + pId + "/triggers/" + tId);
    };
    Triggers.prototype.show = function (projectId, triggerId) {
        var _a = [projectId, triggerId].map(encodeURIComponent), pId = _a[0], tId = _a[1];
        return infrastructure_1.RequestHelper.get(this, "projects/" + pId + "/triggers/" + tId);
    };
    return Triggers;
}(infrastructure_1.BaseService));
exports.default = Triggers;
