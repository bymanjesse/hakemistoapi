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
var Epics = /** @class */ (function (_super) {
    __extends(Epics, _super);
    function Epics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Epics.prototype.all = function (groupId) {
        var gId = encodeURIComponent(groupId);
        return infrastructure_1.RequestHelper.get(this, "groups/" + gId + "/epics");
    };
    Epics.prototype.create = function (groupId, title, options) {
        var gId = encodeURIComponent(groupId);
        return infrastructure_1.RequestHelper.post(this, "groups/" + gId + "/epics", __assign({ title: title }, options));
    };
    Epics.prototype.edit = function (groupId, epicId, options) {
        var _a = [groupId, epicId].map(encodeURIComponent), gId = _a[0], eId = _a[1];
        return infrastructure_1.RequestHelper.put(this, "groups/" + gId + "/epics/" + eId, options);
    };
    Epics.prototype.remove = function (groupId, epicId) {
        var _a = [groupId, epicId].map(encodeURIComponent), gId = _a[0], eId = _a[1];
        return infrastructure_1.RequestHelper.delete(this, "groups/" + gId + "/epics/" + eId);
    };
    Epics.prototype.show = function (groupId, epicId) {
        var _a = [groupId, epicId].map(encodeURIComponent), gId = _a[0], eId = _a[1];
        return infrastructure_1.RequestHelper.get(this, "groups/" + gId + "/epics/" + eId);
    };
    return Epics;
}(infrastructure_1.BaseService));
exports.default = Epics;
