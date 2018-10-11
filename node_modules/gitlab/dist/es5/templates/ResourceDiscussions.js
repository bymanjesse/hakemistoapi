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
var ResourceDiscussions = /** @class */ (function (_super) {
    __extends(ResourceDiscussions, _super);
    function ResourceDiscussions(resourceType, resource2Type, baseParams) {
        var _this = _super.call(this, baseParams) || this;
        _this.url = url_join_1.default(_this.url, resourceType);
        _this.resource2Type = resource2Type;
        return _this;
    }
    ResourceDiscussions.prototype.addNote = function (resourceId, resource2Id, discussiodId, noteId, options) {
        if (!options.body)
            throw new Error('Missing required property: body');
        var _a = [resourceId, resource2Id, discussiodId, noteId]
            .map(encodeURIComponent), rId = _a[0], r2Id = _a[1], dId = _a[2], nId = _a[3];
        return infrastructure_1.RequestHelper.put(this, rId + "/" + this.resource2Type + "/" + r2Id + "/discussions/" + dId + "/notes/" + nId, options);
    };
    ResourceDiscussions.prototype.all = function (resourceId, resource2Id, options) {
        var _a = [resourceId, resource2Id].map(encodeURIComponent), rId = _a[0], r2Id = _a[1];
        return infrastructure_1.RequestHelper.get(this, rId + "/" + this.resource2Type + "/" + r2Id + "/discussions", options);
    };
    ResourceDiscussions.prototype.create = function (resourceId, resource2Id, options) {
        if (!options.body)
            throw new Error('Missing required property: body');
        var _a = [resourceId, resource2Id].map(encodeURIComponent), rId = _a[0], r2Id = _a[1];
        return infrastructure_1.RequestHelper.post(this, rId + "/" + this.resource2Type + "/" + r2Id + "/discussions", options);
    };
    ResourceDiscussions.prototype.editNote = function (resourceId, resource2Id, discussiodId, noteId, body) {
        var _a = [resourceId, resource2Id, discussiodId, noteId]
            .map(encodeURIComponent), rId = _a[0], r2Id = _a[1], dId = _a[2], nId = _a[3];
        return infrastructure_1.RequestHelper.put(this, rId + "/" + this.resource2Type + "/" + r2Id + "/discussions/" + dId + "/notes/" + nId, { body: body });
    };
    ResourceDiscussions.prototype.removeNote = function (resourceId, resource2Id, discussiodId, noteId) {
        var _a = [resourceId, resource2Id, discussiodId, noteId]
            .map(encodeURIComponent), rId = _a[0], r2Id = _a[1], dId = _a[2], nId = _a[3];
        return infrastructure_1.RequestHelper.delete(this, rId + "/" + this.resource2Type + "/" + r2Id + "/discussions/" + dId + "/notes/" + nId);
    };
    ResourceDiscussions.prototype.show = function (resourceId, resource2Id, discussiodId) {
        var _a = [resourceId, resource2Id, discussiodId].map(encodeURIComponent), rId = _a[0], r2Id = _a[1], dId = _a[2];
        return infrastructure_1.RequestHelper.get(this, rId + "/" + this.resource2Type + "/" + r2Id + "/discussions/" + dId);
    };
    return ResourceDiscussions;
}(infrastructure_1.BaseService));
exports.default = ResourceDiscussions;
