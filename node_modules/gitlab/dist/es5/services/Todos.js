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
var Todos = /** @class */ (function (_super) {
    __extends(Todos, _super);
    function Todos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Todos.prototype.all = function (options) {
        return infrastructure_1.RequestHelper.get(this, 'todos', options);
    };
    Todos.prototype.create = function (projectId, mergerequestId) {
        var _a = [projectId, mergerequestId].map(encodeURIComponent), pId = _a[0], mId = _a[1];
        return infrastructure_1.RequestHelper.post(this, "projects/" + pId + "/merge_requests/" + mId + "/todo");
    };
    Todos.prototype.done = function (_a) {
        var todoId = (_a === void 0 ? {} : _a).todoId;
        var tId = encodeURIComponent(todoId);
        return infrastructure_1.RequestHelper.delete(this, "todos/" + tId + "/mark_as_done");
    };
    return Todos;
}(infrastructure_1.BaseService));
exports.default = Todos;
