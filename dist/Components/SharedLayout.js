"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedLayout = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const material_1 = require("@mui/material");
const ResponsiveAppBar_1 = __importDefault(require("./ResponsiveAppBar"));
const SharedLayout = () => {
    return (React.createElement("div", null,
        React.createElement(material_1.CssBaseline, null),
        React.createElement(material_1.Container, { maxWidth: "xl" },
            React.createElement(ResponsiveAppBar_1.default, null),
            React.createElement(react_1.Suspense, { fallback: React.createElement("div", null, "Loading page...") },
                React.createElement(react_router_dom_1.Outlet, null)))));
};
exports.SharedLayout = SharedLayout;
//# sourceMappingURL=SharedLayout.js.map