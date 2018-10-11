"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const url_join_1 = __importDefault(require("url-join"));
const infrastructure_1 = require("../infrastructure");
class ResourceNotes extends infrastructure_1.BaseService {
    constructor(resourceType, resource2Type, baseParams) {
        super(baseParams);
        this.url = url_join_1.default(this.url, resourceType);
        this.resource2Type = resource2Type;
    }
    all(resourceId, resource2Id, options) {
        const [rId, r2Id] = [resourceId, resource2Id].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.get(this, `${rId}/${this.resource2Type}/${r2Id}/notes`, options);
    }
    create(resourceId, resource2Id, options) {
        if (!options.body)
            throw new Error('Missing required property: body');
        const [rId, r2Id] = [resourceId, resource2Id].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.post(this, `${rId}/${this.resource2Type}/${r2Id}/notes`, options);
    }
    edit(resourceId, resource2Id, noteId, options) {
        if (!options.body)
            throw new Error('Missing required property: body');
        const [rId, r2Id, nId] = [resourceId, resource2Id, noteId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.put(this, `${rId}/${this.resource2Type}/${r2Id}/notes/${nId}`, options);
    }
    remove(resourceId, resource2Id, noteId) {
        const [rId, r2Id, nId] = [resourceId, resource2Id, noteId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.delete(this, `${rId}/${this.resource2Type}/${r2Id}/notes/${nId}`);
    }
    show(resourceId, resource2Id, noteId) {
        const [rId, r2Id, nId] = [resourceId, resource2Id, noteId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.get(this, `${rId}/${this.resource2Type}/${r2Id}/notes/${nId}`);
    }
}
exports.default = ResourceNotes;
