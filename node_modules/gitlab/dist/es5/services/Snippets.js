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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var infrastructure_1 = require("../infrastructure");
var Snippets = /** @class */ (function (_super) {
    __extends(Snippets, _super);
    function Snippets() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Snippets.prototype.all = function (options) {
        if (options === void 0) { options = { public: false }; }
        var url = options.public ? 'snippets/public' : 'snippets';
        return infrastructure_1.RequestHelper.get(this, url, options);
    };
    Snippets.prototype.content = function (snippetId) {
        var sId = encodeURIComponent(snippetId);
        return infrastructure_1.RequestHelper.get(this, "snippets/" + sId + "/raw");
    };
    Snippets.prototype.create = function (title, fileName, content, visibility, options) {
        if (options === void 0) { options = {}; }
        return infrastructure_1.RequestHelper.post(this, 'snippets', __assign({ title: title,
            fileName: fileName,
            content: content,
            visibility: visibility }, options));
    };
    Snippets.prototype.edit = function (snippetId, options) {
        var sId = encodeURIComponent(snippetId);
        return infrastructure_1.RequestHelper.put(this, "snippets/" + sId, options);
    };
    Snippets.prototype.remove = function (snippetId) {
        var sId = encodeURIComponent(snippetId);
        return infrastructure_1.RequestHelper.delete(this, "snippets/" + sId);
    };
    Snippets.prototype.show = function (snippetId) {
        var sId = encodeURIComponent(snippetId);
        return infrastructure_1.RequestHelper.get(this, "snippets/" + sId);
    };
    Snippets.prototype.userAgentDetails = function (snippetId) {
        var sId = encodeURIComponent(snippetId);
        return infrastructure_1.RequestHelper.get(this, "snippets/" + sId + "/user_agent_detail");
    };
    return Snippets;
}(infrastructure_1.BaseService));
exports.default = Snippets;
