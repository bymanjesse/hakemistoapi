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
var ResourceCustomAttributes = /** @class */ (function (_super) {
    __extends(ResourceCustomAttributes, _super);
    function ResourceCustomAttributes(resourceType, baseParams) {
        var _this = _super.call(this, baseParams) || this;
        _this.url = url_join_1.default(_this.url, resourceType);
        return _this;
    }
    ResourceCustomAttributes.prototype.all = function (resourceId) {
        var rId = encodeURIComponent(resourceId);
        return infrastructure_1.RequestHelper.get(this, rId + "/custom_attributes");
    };
    ResourceCustomAttributes.prototype.set = function (resourceId, customAttributeId, value) {
        var _a = [resourceId, customAttributeId].map(encodeURIComponent), rId = _a[0], cId = _a[1];
        return infrastructure_1.RequestHelper.put(this, rId + "/custom_attributes/" + cId, {
            value: value,
        });
    };
    ResourceCustomAttributes.prototype.remove = function (resourceId, customAttributeId) {
        var _a = [resourceId, customAttributeId].map(encodeURIComponent), rId = _a[0], cId = _a[1];
        return infrastructure_1.RequestHelper.delete(this, rId + "/custom_attributes/" + cId);
    };
    ResourceCustomAttributes.prototype.show = function (resourceId, customAttributeId) {
        var _a = [resourceId, customAttributeId].map(encodeURIComponent), rId = _a[0], cId = _a[1];
        return infrastructure_1.RequestHelper.get(this, rId + "/custom_attributes/" + cId);
    };
    return ResourceCustomAttributes;
}(infrastructure_1.BaseService));
exports.default = ResourceCustomAttributes;
