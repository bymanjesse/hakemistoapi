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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var url_join_1 = __importDefault(require("url-join"));
var infrastructure_1 = require("../infrastructure");
var ResourceMilestones = /** @class */ (function (_super) {
    __extends(ResourceMilestones, _super);
    function ResourceMilestones(resourceType, baseParams) {
        var _this = _super.call(this, baseParams) || this;
        _this.url = url_join_1.default(_this.url, resourceType);
        return _this;
    }
    ResourceMilestones.prototype.all = function (resourceId, options) {
        var rId = encodeURIComponent(resourceId);
        return infrastructure_1.RequestHelper.get(this, rId + "/milestones", options);
    };
    ResourceMilestones.prototype.create = function (resourceId, title, options) {
        var rId = encodeURIComponent(resourceId);
        return infrastructure_1.RequestHelper.post(this, rId + "/milestones", __assign({ title: title }, options));
    };
    ResourceMilestones.prototype.edit = function (resourceId, milestoneId, options) {
        var _a = [resourceId, milestoneId].map(encodeURIComponent), rId = _a[0], mId = _a[1];
        return infrastructure_1.RequestHelper.put(this, rId + "/milestones/" + mId, options);
    };
    ResourceMilestones.prototype.issues = function (resourceId, milestoneId) {
        var _a = [resourceId, milestoneId].map(encodeURIComponent), rId = _a[0], mId = _a[1];
        return infrastructure_1.RequestHelper.get(this, rId + "/milestones/" + mId + "/issues");
    };
    ResourceMilestones.prototype.mergeRequests = function (resourceId, milestoneId) {
        var _a = [resourceId, milestoneId].map(encodeURIComponent), rId = _a[0], mId = _a[1];
        return infrastructure_1.RequestHelper.get(this, rId + "/milestones/" + mId + "/merge_requests");
    };
    ResourceMilestones.prototype.show = function (resourceId, milestoneId) {
        var _a = [resourceId, milestoneId].map(encodeURIComponent), rId = _a[0], mId = _a[1];
        return infrastructure_1.RequestHelper.get(this, rId + "/milestones/" + mId);
    };
    return ResourceMilestones;
}(infrastructure_1.BaseService));
exports.default = ResourceMilestones;
