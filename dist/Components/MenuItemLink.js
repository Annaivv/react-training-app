"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuItemLink = void 0;
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const material_1 = require("@mui/material");
const MenuItemLink = (_a) => {
    var { to, children } = _a, other = __rest(_a, ["to", "children"]);
    return (react_1.default.createElement(material_1.MenuItem, Object.assign({ component: react_router_dom_1.Link, to: to }, other), children));
};
exports.MenuItemLink = MenuItemLink;
//# sourceMappingURL=MenuItemLink.js.map