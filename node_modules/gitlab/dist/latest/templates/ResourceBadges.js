"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const url_join_1 = __importDefault(require("url-join"));
const infrastructure_1 = require("../infrastructure");
class ResourceBadges extends infrastructure_1.BaseService {
    constructor(resourceType, baseParams) {
        super(baseParams);
        this.url = url_join_1.default(this.url, resourceType);
    }
    add(resourceId, options) {
        const rId = encodeURIComponent(resourceId);
        return infrastructure_1.RequestHelper.post(this, `${rId}/badges`, options);
    }
    all(resourceId, options) {
        const rId = encodeURIComponent(resourceId);
        return infrastructure_1.RequestHelper.get(this, `${rId}/badges`, options);
    }
    edit(resourceId, badgeId, options) {
        const [rId, bId] = [resourceId, badgeId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.put(this, `${rId}/badges/${bId}`, options);
    }
    preview(resourceId, linkUrl, imageUrl) {
        const rId = encodeURIComponent(resourceId);
        return infrastructure_1.RequestHelper.get(this, `${rId}/badges/render`, { linkUrl, imageUrl });
    }
    remove(resourceId, badgeId) {
        const [rId, bId] = [resourceId, badgeId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.delete(this, `${rId}/badges/${bId}`);
    }
    show(resourceId, badgeId) {
        const [rId, bId] = [resourceId, badgeId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.get(this, `${rId}/badges/${bId}`);
    }
}
exports.default = ResourceBadges;
