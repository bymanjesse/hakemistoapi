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
var Events_1 = require("./Events");
var Users = /** @class */ (function (_super) {
    __extends(Users, _super);
    function Users() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Users.prototype.all = function (options) {
        return infrastructure_1.RequestHelper.get(this, 'users', options);
    };
    Users.prototype.activities = function () {
        return infrastructure_1.RequestHelper.get(this, 'users/activities');
    };
    Users.prototype.projects = function (userId) {
        var uId = encodeURIComponent(userId);
        return infrastructure_1.RequestHelper.get(this, "users/" + uId + "/projects");
    };
    Users.prototype.block = function (userId) {
        var uId = encodeURIComponent(userId);
        return infrastructure_1.RequestHelper.post(this, "users/" + uId + "/block");
    };
    Users.prototype.create = function (options) {
        return infrastructure_1.RequestHelper.post(this, 'users', options);
    };
    Users.prototype.current = function () {
        return infrastructure_1.RequestHelper.get(this, 'user');
    };
    Users.prototype.edit = function (userId, options) {
        var uId = encodeURIComponent(userId);
        return infrastructure_1.RequestHelper.put(this, "users/" + uId, options);
    };
    Users.prototype.events = function (userId, options) {
        Events_1.validateEventOptions(options.action, options.targetType);
        var uId = encodeURIComponent(userId);
        return infrastructure_1.RequestHelper.get(this, "users/" + uId + "/events", options);
    };
    Users.prototype.session = function (email, password) {
        return infrastructure_1.RequestHelper.post(this, 'session', {
            email: email,
            password: password,
        });
    };
    Users.prototype.search = function (emailOrUsername) {
        return infrastructure_1.RequestHelper.get(this, 'users', {
            search: emailOrUsername,
        });
    };
    Users.prototype.show = function (userId, options) {
        var uId = encodeURIComponent(userId);
        return infrastructure_1.RequestHelper.get(this, "users/" + uId, options);
    };
    Users.prototype.remove = function (userId) {
        var uId = encodeURIComponent(userId);
        return infrastructure_1.RequestHelper.delete(this, "users/" + uId);
    };
    Users.prototype.unblock = function (userId) {
        var uId = encodeURIComponent(userId);
        return infrastructure_1.RequestHelper.post(this, "users/" + uId + "/unblock");
    };
    return Users;
}(infrastructure_1.BaseService));
exports.default = Users;
