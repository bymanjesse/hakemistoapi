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
var url = function (resourceType, resourceId, resource2Type, resource2Id) {
    var _a = [resourceId, resource2Id].map(encodeURIComponent), rId = _a[0], r2Id = _a[1];
    var output = resourceType + "/" + rId + "/";
    if (resource2Id) {
        output += resource2Type + "/" + r2Id + "/";
    }
    output += 'variables';
    return output;
};
var ResourceVariables = /** @class */ (function (_super) {
    __extends(ResourceVariables, _super);
    function ResourceVariables(resourceType, resource2Type, baseParams) {
        var _this = _super.call(this, baseParams) || this;
        _this.resourceType = resourceType;
        _this.resource2Type = resource2Type;
        return _this;
    }
    ResourceVariables.prototype.all = function (resourceId, resource2Id) {
        return infrastructure_1.RequestHelper.get(this, url(this.resourceType, resourceId, this.resource2Type, resource2Id));
    };
    ResourceVariables.prototype.create = function (resourceId, resource2Id, options) {
        return infrastructure_1.RequestHelper.post(this, url(this.resourceType, resourceId, this.resource2Type, resource2Id), options);
    };
    ResourceVariables.prototype.edit = function (resourceId, resource2Id, keyId, options) {
        var kId = encodeURIComponent(keyId);
        return infrastructure_1.RequestHelper.put(this, url(this.resourceType, resourceId, this.resource2Type, resource2Id) + "/" + kId, options);
    };
    ResourceVariables.prototype.show = function (resourceId, resource2Id, keyId) {
        var kId = encodeURIComponent(keyId);
        return infrastructure_1.RequestHelper.get(this, url(this.resourceType, resourceId, this.resource2Type, resource2Id) + "/" + kId);
    };
    ResourceVariables.prototype.remove = function (resourceId, resource2Id, keyId) {
        var kId = encodeURIComponent(keyId);
        return infrastructure_1.RequestHelper.delete(this, url(this.resourceType, resourceId, this.resource2Type, resource2Id) + "/" + kId);
    };
    return ResourceVariables;
}(infrastructure_1.BaseService));
exports.default = ResourceVariables;
