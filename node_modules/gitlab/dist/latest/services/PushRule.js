"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const infrastructure_1 = require("../infrastructure");
class PushRule extends infrastructure_1.BaseService {
    create(projectId, options) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.post(this, `projects/${pId}/push_rule`, options);
    }
    edit(projectId, _a = {}) {
        var { upsert = false } = _a, options = __rest(_a, ["upsert"]);
        return __awaiter(this, void 0, void 0, function* () {
            const pId = encodeURIComponent(projectId);
            if (upsert) {
                const pushRule = yield this.show(projectId);
                if (!pushRule)
                    return this.create(projectId, options);
            }
            return infrastructure_1.RequestHelper.put(this, `projects/${pId}/push_rule`, options);
        });
    }
    remove(projectId) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.delete(this, `projects/${pId}/push_rule`);
    }
    show(projectId) {
        const pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.get(this, `projects/${pId}/push_rule`);
    }
}
exports.default = PushRule;
