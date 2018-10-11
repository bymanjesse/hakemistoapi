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
var GroupProjects = /** @class */ (function (_super) {
    __extends(GroupProjects, _super);
    function GroupProjects() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GroupProjects.prototype.all = function (groupId, options) {
        var gId = encodeURIComponent(groupId);
        return infrastructure_1.RequestHelper.get(this, "groups/" + gId + "/projects", options);
    };
    GroupProjects.prototype.add = function (groupId, projectId) {
        var _a = [groupId, projectId].map(encodeURIComponent), gId = _a[0], pId = _a[1];
        return infrastructure_1.RequestHelper.post(this, "groups/" + gId + "/projects/" + pId);
    };
    return GroupProjects;
}(infrastructure_1.BaseService));
exports.default = GroupProjects;
