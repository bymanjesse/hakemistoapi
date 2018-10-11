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
var PipelineScheduleVariables = /** @class */ (function (_super) {
    __extends(PipelineScheduleVariables, _super);
    function PipelineScheduleVariables(options) {
        return _super.call(this, 'projects', 'pipelines', options) || this;
    }
    return PipelineScheduleVariables;
}(templates_1.ResourceVariables));
exports.default = PipelineScheduleVariables;
