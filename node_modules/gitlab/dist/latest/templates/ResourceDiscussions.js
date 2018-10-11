"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const url_join_1 = __importDefault(require("url-join"));
const infrastructure_1 = require("../infrastructure");
class ResourceDiscussions extends infrastructure_1.BaseService {
    constructor(resourceType, resource2Type, baseParams) {
        super(baseParams);
        this.url = url_join_1.default(this.url, resourceType);
        this.resource2Type = resource2Type;
    }
    addNote(resourceId, resource2Id, discussiodId, noteId, options) {
        if (!options.body)
            throw new Error('Missing required property: body');
        const [rId, r2Id, dId, nId] = [resourceId, resource2Id, discussiodId, noteId]
            .map(encodeURIComponent);
        return infrastructure_1.RequestHelper.put(this, `${rId}/${this.resource2Type}/${r2Id}/discussions/${dId}/notes/${nId}`, options);
    }
    all(resourceId, resource2Id, options) {
        const [rId, r2Id] = [resourceId, resource2Id].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.get(this, `${rId}/${this.resource2Type}/${r2Id}/discussions`, options);
    }
    create(resourceId, resource2Id, options) {
        if (!options.body)
            throw new Error('Missing required property: body');
        const [rId, r2Id] = [resourceId, resource2Id].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.post(this, `${rId}/${this.resource2Type}/${r2Id}/discussions`, options);
    }
    editNote(resourceId, resource2Id, discussiodId, noteId, body) {
        const [rId, r2Id, dId, nId] = [resourceId, resource2Id, discussiodId, noteId]
            .map(encodeURIComponent);
        return infrastructure_1.RequestHelper.put(this, `${rId}/${this.resource2Type}/${r2Id}/discussions/${dId}/notes/${nId}`, { body });
    }
    removeNote(resourceId, resource2Id, discussiodId, noteId) {
        const [rId, r2Id, dId, nId] = [resourceId, resource2Id, discussiodId, noteId]
            .map(encodeURIComponent);
        return infrastructure_1.RequestHelper.delete(this, `${rId}/${this.resource2Type}/${r2Id}/discussions/${dId}/notes/${nId}`);
    }
    show(resourceId, resource2Id, discussiodId) {
        const [rId, r2Id, dId] = [resourceId, resource2Id, discussiodId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.get(this, `${rId}/${this.resource2Type}/${r2Id}/discussions/${dId}`);
    }
}
exports.default = ResourceDiscussions;
