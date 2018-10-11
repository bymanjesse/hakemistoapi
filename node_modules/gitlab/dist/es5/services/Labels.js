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
var Labels = /** @class */ (function (_super) {
    __extends(Labels, _super);
    function Labels() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Labels.prototype.all = function (projectId, options) {
        if (options === void 0) { options = {}; }
        var pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.get(this, "projects/" + pId + "/labels", options);
    };
    Labels.prototype.create = function (projectId, options) {
        if (options === void 0) { options = {}; }
        var pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.post(this, "projects/" + pId + "/labels", options);
    };
    Labels.prototype.edit = function (projectId, labelName, options) {
        if (options === void 0) { options = {}; }
        var pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.put(this, "projects/" + pId + "/labels", __assign({ name: labelName }, options));
    };
    Labels.prototype.remove = function (projectId, labelName) {
        var pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.delete(this, "projects/" + pId + "/labels", { name: labelName });
    };
    Labels.prototype.subscribe = function (projectId, labelId, options) {
        if (options === void 0) { options = {}; }
        var _a = [projectId, labelId].map(encodeURIComponent), pId = _a[0], lId = _a[1];
        return infrastructure_1.RequestHelper.post(this, "projects/" + pId + "/issues/" + lId + "/subscribe", options);
    };
    Labels.prototype.unsubscribe = function (projectId, labelId) {
        var _a = [projectId, labelId].map(encodeURIComponent), pId = _a[0], lId = _a[1];
        return infrastructure_1.RequestHelper.delete(this, "projects/" + pId + "/issues/" + lId + "/unsubscribe");
    };
    return Labels;
}(infrastructure_1.BaseService));
exports.default = Labels;
