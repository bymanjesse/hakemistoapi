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
exports.ACCESS_LEVELS = {
    GUEST: 10,
    REPORTER: 20,
    DEVELOPER: 30,
    MASTER: 40,
    OWNER: 50,
};
var ResourceAccessRequests = /** @class */ (function (_super) {
    __extends(ResourceAccessRequests, _super);
    function ResourceAccessRequests(resourceType, baseParams) {
        var _this = _super.call(this, baseParams) || this;
        _this.url = url_join_1.default(_this.url, resourceType);
        _this.ACCESS_LEVELS = exports.ACCESS_LEVELS;
        return _this;
    }
    ResourceAccessRequests.prototype.all = function (resourceId) {
        var rId = encodeURIComponent(resourceId);
        return infrastructure_1.RequestHelper.get(this, rId + "/access_requests");
    };
    ResourceAccessRequests.prototype.request = function (resourceId) {
        var rId = encodeURIComponent(resourceId);
        return infrastructure_1.RequestHelper.post(this, rId + "/access_requests");
    };
    ResourceAccessRequests.prototype.approve = function (resourceId, userId, _a) {
        var _b = _a.accessLevel, accessLevel = _b === void 0 ? 30 : _b;
        var _c = [resourceId, userId].map(encodeURIComponent), rId = _c[0], uId = _c[1];
        return infrastructure_1.RequestHelper.post(this, rId + "/access_requests/" + uId + "/approve", {
            accessLevel: accessLevel,
        });
    };
    ResourceAccessRequests.prototype.deny = function (resourceId, userId) {
        var _a = [resourceId, userId].map(encodeURIComponent), rId = _a[0], uId = _a[1];
        return infrastructure_1.RequestHelper.delete(this, rId + "/access_requests/" + uId);
    };
    return ResourceAccessRequests;
}(infrastructure_1.BaseService));
exports.default = ResourceAccessRequests;
