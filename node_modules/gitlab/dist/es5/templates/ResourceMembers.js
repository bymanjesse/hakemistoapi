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
var ResourceMembers = /** @class */ (function (_super) {
    __extends(ResourceMembers, _super);
    function ResourceMembers(resourceType, baseParams) {
        var _this = _super.call(this, baseParams) || this;
        _this.url = url_join_1.default(_this.url, resourceType);
        return _this;
    }
    ResourceMembers.prototype.all = function (resourceId, includeInherited, options) {
        if (includeInherited === void 0) { includeInherited = false; }
        if (options === void 0) { options = {}; }
        var rId = encodeURIComponent(resourceId);
        var url = includeInherited ? rId + "/members/all" : rId + "/members";
        return infrastructure_1.RequestHelper.get(this, url, { options: options });
    };
    ResourceMembers.prototype.add = function (resourceId, userId, accessLevel, options) {
        var _a = [resourceId, userId].map(encodeURIComponent), rId = _a[0], uId = _a[1];
        return infrastructure_1.RequestHelper.post(this, rId + "/members", __assign({ user_id: uId, access_level: parseInt(accessLevel, 10) }, options));
    };
    ResourceMembers.prototype.edit = function (resourceId, userId, accessLevel, options) {
        var _a = [resourceId, userId].map(encodeURIComponent), rId = _a[0], uId = _a[1];
        return infrastructure_1.RequestHelper.put(this, rId + "/members/" + uId, __assign({ access_level: parseInt(accessLevel, 10) }, options));
    };
    ResourceMembers.prototype.show = function (resourceId, userId) {
        var _a = [resourceId, userId].map(encodeURIComponent), rId = _a[0], uId = _a[1];
        return infrastructure_1.RequestHelper.get(this, rId + "/members/" + uId);
    };
    ResourceMembers.prototype.remove = function (resourceId, userId) {
        var _a = [resourceId, userId].map(encodeURIComponent), rId = _a[0], uId = _a[1];
        return infrastructure_1.RequestHelper.delete(this, rId + "/members/" + uId);
    };
    return ResourceMembers;
}(infrastructure_1.BaseService));
exports.default = ResourceMembers;
