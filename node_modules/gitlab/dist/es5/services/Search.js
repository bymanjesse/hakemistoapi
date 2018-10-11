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
Object.defineProperty(exports, "__esModule", { value: true });
var infrastructure_1 = require("../infrastructure");
var Search = /** @class */ (function (_super) {
    __extends(Search, _super);
    function Search() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Search.prototype.all = function (scope, search, _a) {
        var _b = _a === void 0 ? {} : _a, projectId = _b.projectId, groupId = _b.groupId;
        var url = '';
        if (projectId) {
            url += "projects/" + encodeURIComponent(projectId) + "/";
        }
        else if (groupId) {
            url += "groups/" + encodeURIComponent(groupId) + "/";
        }
        return infrastructure_1.RequestHelper.get(this, url + "search", { scope: scope, search: search });
    };
    return Search;
}(infrastructure_1.BaseService));
exports.default = Search;
