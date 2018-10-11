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
var Repositories = /** @class */ (function (_super) {
    __extends(Repositories, _super);
    function Repositories() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Repositories.prototype.compare = function (projectId, from, to) {
        var pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.get(this, "projects/" + pId + "/repository/compare", {
            from: from,
            to: to,
        });
    };
    Repositories.prototype.contributors = function (projectId) {
        var pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.get(this, "projects/" + pId + "/repository/contributors");
    };
    Repositories.prototype.showArchive = function (projectId, _a) {
        var sha = _a.sha;
        var pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.get(this, "projects/" + pId + "/repository/archive", {
            sha: sha,
        });
    };
    Repositories.prototype.showBlob = function (projectId, sha) {
        var pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.get(this, "projects/" + pId + "/repository/blobs/" + sha);
    };
    Repositories.prototype.showBlobRaw = function (projectId, sha) {
        var pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.get(this, "projects/" + pId + "/repository/blobs/" + sha + "/raw");
    };
    Repositories.prototype.tree = function (projectId, options) {
        var pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.get(this, "projects/" + pId + "/repository/tree", options);
    };
    return Repositories;
}(infrastructure_1.BaseService));
exports.default = Repositories;
