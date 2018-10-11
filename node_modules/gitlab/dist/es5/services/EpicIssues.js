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
var EpicIssues = /** @class */ (function (_super) {
    __extends(EpicIssues, _super);
    function EpicIssues() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EpicIssues.prototype.all = function (groupId, epicId) {
        var _a = [groupId, epicId].map(encodeURIComponent), gId = _a[0], eId = _a[1];
        return infrastructure_1.RequestHelper.get(this, "groups/" + gId + "/epics/" + eId + "/issues");
    };
    EpicIssues.prototype.assign = function (groupId, epicId, issueId) {
        var _a = [groupId, epicId, issueId].map(encodeURIComponent), gId = _a[0], eId = _a[1], iId = _a[2];
        return infrastructure_1.RequestHelper.put(this, "groups/" + gId + "/epics/" + eId + "/issues/" + iId);
    };
    EpicIssues.prototype.edit = function (groupId, epicId, issueId, options) {
        var _a = [groupId, epicId, issueId].map(encodeURIComponent), gId = _a[0], eId = _a[1], iId = _a[2];
        return infrastructure_1.RequestHelper.delete(this, "groups/" + gId + "/epics/" + eId + "/issues/" + iId, options);
    };
    EpicIssues.prototype.remove = function (groupId, epicId, issueId) {
        var _a = [groupId, epicId, issueId].map(encodeURIComponent), gId = _a[0], eId = _a[1], iId = _a[2];
        return infrastructure_1.RequestHelper.delete(this, "groups/" + gId + "/epics/" + eId + "/issues/" + iId);
    };
    return EpicIssues;
}(infrastructure_1.BaseService));
exports.default = EpicIssues;
