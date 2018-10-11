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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var url_join_1 = __importDefault(require("url-join"));
var infrastructure_1 = require("../infrastructure");
var ResourceBadges = /** @class */ (function (_super) {
    __extends(ResourceBadges, _super);
    function ResourceBadges(resourceType, baseParams) {
        var _this = _super.call(this, baseParams) || this;
        _this.url = url_join_1.default(_this.url, resourceType);
        return _this;
    }
    ResourceBadges.prototype.add = function (resourceId, options) {
        var rId = encodeURIComponent(resourceId);
        return infrastructure_1.RequestHelper.post(this, rId + "/badges", options);
    };
    ResourceBadges.prototype.all = function (resourceId, options) {
        var rId = encodeURIComponent(resourceId);
        return infrastructure_1.RequestHelper.get(this, rId + "/badges", options);
    };
    ResourceBadges.prototype.edit = function (resourceId, badgeId, options) {
        var _a = [resourceId, badgeId].map(encodeURIComponent), rId = _a[0], bId = _a[1];
        return infrastructure_1.RequestHelper.put(this, rId + "/badges/" + bId, options);
    };
    ResourceBadges.prototype.preview = function (resourceId, linkUrl, imageUrl) {
        var rId = encodeURIComponent(resourceId);
        return infrastructure_1.RequestHelper.get(this, rId + "/badges/render", { linkUrl: linkUrl, imageUrl: imageUrl });
    };
    ResourceBadges.prototype.remove = function (resourceId, badgeId) {
        var _a = [resourceId, badgeId].map(encodeURIComponent), rId = _a[0], bId = _a[1];
        return infrastructure_1.RequestHelper.delete(this, rId + "/badges/" + bId);
    };
    ResourceBadges.prototype.show = function (resourceId, badgeId) {
        var _a = [resourceId, badgeId].map(encodeURIComponent), rId = _a[0], bId = _a[1];
        return infrastructure_1.RequestHelper.get(this, rId + "/badges/" + bId);
    };
    return ResourceBadges;
}(infrastructure_1.BaseService));
exports.default = ResourceBadges;
