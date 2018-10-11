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
var Wikis = /** @class */ (function (_super) {
    __extends(Wikis, _super);
    function Wikis() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Wikis.prototype.all = function (projectId, options) {
        var pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.get(this, "projects/" + pId + "/wikis", options);
    };
    Wikis.prototype.create = function (projectId, options) {
        var pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.post(this, "projects/" + pId + "/wikis", options);
    };
    Wikis.prototype.edit = function (projectId, slug, options) {
        var pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.put(this, "projects/" + pId + "/wikis/" + slug, options);
    };
    Wikis.prototype.show = function (projectId, slug) {
        var pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.get(this, "projects/" + pId + "/wikis/" + slug);
    };
    Wikis.prototype.remove = function (projectId, slug) {
        var pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.delete(this, "projects/" + pId + "/wikis/" + slug);
    };
    return Wikis;
}(infrastructure_1.BaseService));
exports.default = Wikis;
