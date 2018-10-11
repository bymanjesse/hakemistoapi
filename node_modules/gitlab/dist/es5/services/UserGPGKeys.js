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
var url = function (userId) { return (userId ? "users/" + encodeURIComponent(userId) + "/gpg_keys" : 'users/gpg_keys'); };
var UserGPGKeys = /** @class */ (function (_super) {
    __extends(UserGPGKeys, _super);
    function UserGPGKeys() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserGPGKeys.prototype.all = function (_a) {
        var userId = (_a === void 0 ? {} : _a).userId;
        return infrastructure_1.RequestHelper.get(this, url(userId));
    };
    UserGPGKeys.prototype.add = function (title, key, _a) {
        var userId = (_a === void 0 ? {} : _a).userId;
        return infrastructure_1.RequestHelper.post(this, url(userId), {
            title: title,
            key: key,
        });
    };
    UserGPGKeys.prototype.show = function (keyId, _a) {
        var userId = (_a === void 0 ? {} : _a).userId;
        var kId = encodeURIComponent(keyId);
        return infrastructure_1.RequestHelper.get(this, url(userId) + "/" + kId);
    };
    UserGPGKeys.prototype.remove = function (keyId, _a) {
        var userId = (_a === void 0 ? {} : _a).userId;
        var kId = encodeURIComponent(keyId);
        return infrastructure_1.RequestHelper.delete(this, url(userId) + "/" + kId);
    };
    return UserGPGKeys;
}(infrastructure_1.BaseService));
exports.default = UserGPGKeys;
