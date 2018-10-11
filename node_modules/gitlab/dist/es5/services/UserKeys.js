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
var url = function (userId) { return (userId ? "users/" + encodeURIComponent(userId) + "/keys" : 'user/keys'); };
var UserKeys = /** @class */ (function (_super) {
    __extends(UserKeys, _super);
    function UserKeys() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserKeys.prototype.all = function (_a) {
        var userId = _a.userId;
        return infrastructure_1.RequestHelper.get(this, url(userId));
    };
    UserKeys.prototype.create = function (title, key, _a) {
        var userId = (_a === void 0 ? {} : _a).userId;
        return infrastructure_1.RequestHelper.post(this, url(userId), {
            title: title,
            key: key,
        });
    };
    UserKeys.prototype.show = function (keyId) {
        var kId = encodeURIComponent(keyId);
        return infrastructure_1.RequestHelper.get(this, "user/keys/" + kId);
    };
    UserKeys.prototype.remove = function (keyId, _a) {
        var userId = (_a === void 0 ? {} : _a).userId;
        var kId = encodeURIComponent(keyId);
        return infrastructure_1.RequestHelper.delete(this, url(userId) + "/" + kId);
    };
    return UserKeys;
}(infrastructure_1.BaseService));
exports.default = UserKeys;
