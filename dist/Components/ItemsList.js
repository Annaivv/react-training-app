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
exports.ItemsList = void 0;
const React = __importStar(require("react"));
const styles_1 = require("@mui/material/styles");
const material_1 = require("@mui/material");
const Clear_1 = __importDefault(require("@mui/icons-material/Clear"));
const AddCircle_1 = __importDefault(require("@mui/icons-material/AddCircle"));
const react_router_dom_1 = require("react-router-dom");
const Item = (0, styles_1.styled)(material_1.Paper)(({ theme }) => (Object.assign(Object.assign({ backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff" }, theme.typography.body2), { padding: theme.spacing(2), textAlign: "center", display: "flex", justifyContent: "space-between", color: theme.palette.text.secondary })));
const ItemsList = ({ itemsKey, getItems, AddItemForm, }) => {
    const location = (0, react_router_dom_1.useLocation)();
    const [items, setItems] = React.useState(() => {
        const savedItems = localStorage.getItem(itemsKey);
        return savedItems ? JSON.parse(savedItems) : getItems();
    });
    const [open, setOpen] = React.useState(false);
    const handleOpenForm = () => setOpen(true);
    const handleCloseForm = () => setOpen(false);
    const handleAddItem = (newItem) => {
        setItems((prevItems) => {
            const updatedItems = [...prevItems, newItem];
            localStorage.setItem(itemsKey, JSON.stringify(updatedItems));
            return updatedItems;
        });
    };
    const handleRemoveItem = (id) => {
        setItems((prevItems) => {
            const updatedItems = prevItems.filter((item) => item.id !== id);
            localStorage.setItem(itemsKey, JSON.stringify(updatedItems));
            return updatedItems;
        });
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(material_1.Box, { sx: { width: "100%", padding: "24px", textAlign: "center" } },
            React.createElement(material_1.Stack, { spacing: 2 }, items.map((item) => (React.createElement(Item, { key: item.id },
                React.createElement(react_router_dom_1.Link, { to: `/${itemsKey}/${item.id}`, state: { from: location }, style: { textDecoration: "none", flexGrow: 1 } },
                    React.createElement(material_1.Typography, { color: "primary" }, item.name)),
                React.createElement(material_1.IconButton, { color: "error", "aria-label": "remove animal", onClick: () => handleRemoveItem(item.id) },
                    React.createElement(Clear_1.default, { fontSize: "medium" })))))),
            React.createElement(material_1.IconButton, { color: "primary", "aria-label": "add animal", sx: { paddingTop: "24px" }, onClick: handleOpenForm },
                React.createElement(AddCircle_1.default, { fontSize: "large" }))),
        open && (React.createElement(AddItemForm, { open: open, handleCloseForm: handleCloseForm, handleAddItem: handleAddItem }))));
};
exports.ItemsList = ItemsList;
//# sourceMappingURL=ItemsList.js.map