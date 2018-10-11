"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const infrastructure_1 = require("../infrastructure");
class Snippets extends infrastructure_1.BaseService {
    all(options = { public: false }) {
        const url = options.public ? 'snippets/public' : 'snippets';
        return infrastructure_1.RequestHelper.get(this, url, options);
    }
    content(snippetId) {
        const sId = encodeURIComponent(snippetId);
        return infrastructure_1.RequestHelper.get(this, `snippets/${sId}/raw`);
    }
    create(title, fileName, content, visibility, options = {}) {
        return infrastructure_1.RequestHelper.post(this, 'snippets', Object.assign({ title,
            fileName,
            content,
            visibility }, options));
    }
    edit(snippetId, options) {
        const sId = encodeURIComponent(snippetId);
        return infrastructure_1.RequestHelper.put(this, `snippets/${sId}`, options);
    }
    remove(snippetId) {
        const sId = encodeURIComponent(snippetId);
        return infrastructure_1.RequestHelper.delete(this, `snippets/${sId}`);
    }
    show(snippetId) {
        const sId = encodeURIComponent(snippetId);
        return infrastructure_1.RequestHelper.get(this, `snippets/${sId}`);
    }
    userAgentDetails(snippetId) {
        const sId = encodeURIComponent(snippetId);
        return infrastructure_1.RequestHelper.get(this, `snippets/${sId}/user_agent_detail`);
    }
}
exports.default = Snippets;
