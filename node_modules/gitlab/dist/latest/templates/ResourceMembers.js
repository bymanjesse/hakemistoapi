"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const url_join_1 = __importDefault(require("url-join"));
const infrastructure_1 = require("../infrastructure");
class ResourceMembers extends infrastructure_1.BaseService {
    constructor(resourceType, baseParams) {
        super(baseParams);
        this.url = url_join_1.default(this.url, resourceType);
    }
    all(resourceId, includeInherited = false, options = {}) {
        const rId = encodeURIComponent(resourceId);
        const url = includeInherited ? `${rId}/members/all` : `${rId}/members`;
        return infrastructure_1.RequestHelper.get(this, url, { options });
    }
    add(resourceId, userId, accessLevel, options) {
        const [rId, uId] = [resourceId, userId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.post(this, `${rId}/members`, Object.assign({ user_id: uId, access_level: parseInt(accessLevel, 10) }, options));
    }
    edit(resourceId, userId, accessLevel, options) {
        const [rId, uId] = [resourceId, userId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.put(this, `${rId}/members/${uId}`, Object.assign({ access_level: parseInt(accessLevel, 10) }, options));
    }
    show(resourceId, userId) {
        const [rId, uId] = [resourceId, userId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.get(this, `${rId}/members/${uId}`);
    }
    remove(resourceId, userId) {
        const [rId, uId] = [resourceId, userId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.delete(this, `${rId}/members/${uId}`);
    }
}
exports.default = ResourceMembers;
