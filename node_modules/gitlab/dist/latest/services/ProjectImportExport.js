"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const infrastructure_1 = require("../infrastructure");
class ProjectImportExport extends infrastructure_1.BaseService {
    download(projectId) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.get(this, `projects/${pId}/export/download`);
    }
    exportStatus(projectId) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.get(this, `projects/${pId}/export`);
    }
    import(file, path, options) {
        return infrastructure_1.RequestHelper.post(this, 'projects/import', Object.assign({ file, path }, options));
    }
    importStatus(projectId) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.get(this, `projects/${pId}/import`);
    }
    schedule(projectId, options) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.post(this, `projects/${pId}/export`, options);
    }
}
exports.default = ProjectImportExport;
