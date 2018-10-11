"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const url_join_1 = __importDefault(require("url-join"));
const infrastructure_1 = require("../infrastructure");
class ResourceIssueBoards extends infrastructure_1.BaseService {
    constructor(resourceType, baseParams) {
        super(baseParams);
        this.url = url_join_1.default(this.url, resourceType);
    }
    all(resourceId, options) {
        const rId = encodeURIComponent(resourceId);
        return infrastructure_1.RequestHelper.get(this, `${rId}/boards`, options);
    }
    create(resourceId, name) {
        const rId = encodeURIComponent(resourceId);
        return infrastructure_1.RequestHelper.post(this, `${rId}/boards`, { name });
    }
    createList(resourceId, boardId, labelId) {
        const [rId, bId] = [resourceId, boardId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.post(this, `${rId}/boards/${bId}/lists`, { labelId });
    }
    edit(resourceId, boardId, options) {
        const [rId, bId] = [resourceId, boardId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.put(this, `${rId}/boards/${bId}`, options);
    }
    editList(resourceId, boardId, listId, position) {
        const [rId, bId, lId] = [resourceId, boardId, listId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.put(this, `${rId}/boards/${bId}/lists/${lId}`, { position });
    }
    lists(resourceId, boardId) {
        const [rId, bId] = [resourceId, boardId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.get(this, `${rId}/boards/${bId}/lists`);
    }
    remove(resourceId, boardId) {
        const [rId, bId] = [resourceId, boardId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.delete(this, `${rId}/boards/${bId}`);
    }
    removeList(resourceId, boardId, listId) {
        const [rId, bId, lId] = [resourceId, boardId, listId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.delete(this, `${rId}/boards/${bId}/lists/${lId}`);
    }
    show(resourceId, boardId) {
        const [rId, bId] = [resourceId, boardId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.get(this, `${rId}/boards/${bId}`);
    }
    showList(resourceId, boardId, listId) {
        const [rId, bId, lId] = [resourceId, boardId, listId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.get(this, `${rId}/boards/${bId}/lists/${lId}`);
    }
}
exports.default = ResourceIssueBoards;
