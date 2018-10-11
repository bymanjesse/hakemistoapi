"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const url_join_1 = __importDefault(require("url-join"));
const infrastructure_1 = require("../infrastructure");
function url(projectId, resourceType, resourceId, noteId) {
    const [pId, rId] = [projectId, resourceId].map(encodeURIComponent);
    let output = `${pId}/${resourceType}/${rId}/`;
    if (noteId) {
        output += `notes/${encodeURIComponent(noteId)}/`;
    }
    output += 'award_emoji';
    return output;
}
class ResourceAwardsEmojis extends infrastructure_1.BaseService {
    constructor(resourceType, baseParams) {
        super(baseParams);
        this.url = url_join_1.default(this.url, 'projects');
        this.resourceType = resourceType;
    }
    all(projectId, resourceId, options, noteId) {
        return infrastructure_1.RequestHelper.get(this, url(projectId, this.resourceType, resourceId, noteId), options);
    }
    award(projectId, resourceId, name, noteId) {
        return infrastructure_1.RequestHelper.post(this, url(projectId, this.resourceType, resourceId, noteId), {
            name,
        });
    }
    remove(projectId, resourceId, awardId, noteId) {
        return infrastructure_1.RequestHelper.delete(this, url(projectId, this.resourceType, resourceId, noteId));
    }
    show(projectId, resourceId, awardId, noteId) {
        return infrastructure_1.RequestHelper.get(this, url(projectId, this.resourceType, resourceId, noteId));
    }
}
exports.default = ResourceAwardsEmojis;
