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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddItemForm = exports.defaultValues = void 0;
const React = __importStar(require("react"));
const nanoid_1 = require("nanoid");
const react_hook_form_1 = require("react-hook-form");
const material_1 = require("@mui/material");
exports.defaultValues = {
    name: "",
    description: "",
};
const AddItemForm = ({ open, handleCloseForm, handleAddItem, additionalFields, }) => {
    const { handleSubmit, control, formState: { errors }, } = (0, react_hook_form_1.useForm)({
        defaultValues: exports.defaultValues,
    });
    const onSubmit = (data) => {
        const newItem = Object.assign({ id: (0, nanoid_1.nanoid)() }, data);
        handleAddItem(newItem);
        handleCloseForm();
        console.log(newItem);
    };
    return (React.createElement(material_1.Container, { sx: { padding: "16px" } },
        React.createElement(material_1.Dialog, { open: open, onClose: handleCloseForm, sx: { paddingLeft: "24px", paddingRight: "24px" } },
            React.createElement(material_1.DialogTitle, null, "Please fill in the information"),
            React.createElement(material_1.DialogContent, null,
                React.createElement("form", { onSubmit: handleSubmit(onSubmit) },
                    React.createElement(react_hook_form_1.Controller, { render: ({ field }) => (React.createElement(material_1.TextField, Object.assign({}, field, { autoFocus: true, margin: "dense", id: "name", label: "Name", type: "text", variant: "filled", fullWidth: true, error: !!errors.name, helperText: errors.name ? errors.name.message : "" }))), name: "name", control: control, rules: {
                            required: "This field is required",
                        } }),
                    React.createElement(react_hook_form_1.Controller, { render: ({ field }) => (React.createElement(material_1.TextField, Object.assign({}, field, { autoFocus: true, margin: "dense", id: "description", label: "Description", type: "text", variant: "filled", fullWidth: true, error: !!errors.description, helperText: errors.description ? errors.description.message : "" }))), name: "description", control: control }),
                    additionalFields,
                    React.createElement(material_1.DialogActions, null,
                        React.createElement(material_1.Button, { onClick: handleCloseForm }, "Cancel"),
                        React.createElement(material_1.Button, { type: "submit" }, "Add Item")))))));
};
exports.AddItemForm = AddItemForm;
//# sourceMappingURL=AddItemForm.js.map