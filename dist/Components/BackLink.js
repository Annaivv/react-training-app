"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackLink = void 0;
const react_1 = __importDefault(require("react"));
const Button_1 = __importDefault(require("@mui/material/Button"));
const ArrowBack_1 = __importDefault(require("@mui/icons-material/ArrowBack"));
const react_router_dom_1 = require("react-router-dom");
const BackLink = ({ to, children }) => {
    return (react_1.default.createElement(react_router_dom_1.Link, { to: to },
        react_1.default.createElement(Button_1.default, { variant: "outlined", startIcon: react_1.default.createElement(ArrowBack_1.default, null) }, children)));
};
exports.BackLink = BackLink;
//# sourceMappingURL=BackLink.js.map