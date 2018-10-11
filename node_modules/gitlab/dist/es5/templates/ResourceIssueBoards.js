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
var ResourceIssueBoards = /** @class */ (function (_super) {
    __extends(ResourceIssueBoards, _super);
    function ResourceIssueBoards(resourceType, baseParams) {
        var _this = _super.call(this, baseParams) || this;
        _this.url = url_join_1.default(_this.url, resourceType);
        return _this;
    }
    ResourceIssueBoards.prototype.all = function (resourceId, options) {
        var rId = encodeURIComponent(resourceId);
        return infrastructure_1.RequestHelper.get(this, rId + "/boards", options);
    };
    ResourceIssueBoards.prototype.create = function (resourceId, name) {
        var rId = encodeURIComponent(resourceId);
        return infrastructure_1.RequestHelper.post(this, rId + "/boards", { name: name });
    };
    ResourceIssueBoards.prototype.createList = function (resourceId, boardId, labelId) {
        var _a = [resourceId, boardId].map(encodeURIComponent), rId = _a[0], bId = _a[1];
        return infrastructure_1.RequestHelper.post(this, rId + "/boards/" + bId + "/lists", { labelId: labelId });
    };
    ResourceIssueBoards.prototype.edit = function (resourceId, boardId, options) {
        var _a = [resourceId, boardId].map(encodeURIComponent), rId = _a[0], bId = _a[1];
        return infrastructure_1.RequestHelper.put(this, rId + "/boards/" + bId, options);
    };
    ResourceIssueBoards.prototype.editList = function (resourceId, boardId, listId, position) {
        var _a = [resourceId, boardId, listId].map(encodeURIComponent), rId = _a[0], bId = _a[1], lId = _a[2];
        return infrastructure_1.RequestHelper.put(this, rId + "/boards/" + bId + "/lists/" + lId, { position: position });
    };
    ResourceIssueBoards.prototype.lists = function (resourceId, boardId) {
        var _a = [resourceId, boardId].map(encodeURIComponent), rId = _a[0], bId = _a[1];
        return infrastructure_1.RequestHelper.get(this, rId + "/boards/" + bId + "/lists");
    };
    ResourceIssueBoards.prototype.remove = function (resourceId, boardId) {
        var _a = [resourceId, boardId].map(encodeURIComponent), rId = _a[0], bId = _a[1];
        return infrastructure_1.RequestHelper.delete(this, rId + "/boards/" + bId);
    };
    ResourceIssueBoards.prototype.removeList = function (resourceId, boardId, listId) {
        var _a = [resourceId, boardId, listId].map(encodeURIComponent), rId = _a[0], bId = _a[1], lId = _a[2];
        return infrastructure_1.RequestHelper.delete(this, rId + "/boards/" + bId + "/lists/" + lId);
    };
    ResourceIssueBoards.prototype.show = function (resourceId, boardId) {
        var _a = [resourceId, boardId].map(encodeURIComponent), rId = _a[0], bId = _a[1];
        return infrastructure_1.RequestHelper.get(this, rId + "/boards/" + bId);
    };
    ResourceIssueBoards.prototype.showList = function (resourceId, boardId, listId) {
        var _a = [resourceId, boardId, listId].map(encodeURIComponent), rId = _a[0], bId = _a[1], lId = _a[2];
        return infrastructure_1.RequestHelper.get(this, rId + "/boards/" + bId + "/lists/" + lId);
    };
    return ResourceIssueBoards;
}(infrastructure_1.BaseService));
exports.default = ResourceIssueBoards;
