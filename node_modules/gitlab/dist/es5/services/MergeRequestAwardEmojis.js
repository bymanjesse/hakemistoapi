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
var templates_1 = require("../templates");
var MergeRequestAwardEmojis = /** @class */ (function (_super) {
    __extends(MergeRequestAwardEmojis, _super);
    function MergeRequestAwardEmojis(options) {
        return _super.call(this, 'merge_requests', options) || this;
    }
    return MergeRequestAwardEmojis;
}(templates_1.ResourceAwardEmojis));
exports.default = MergeRequestAwardEmojis;
