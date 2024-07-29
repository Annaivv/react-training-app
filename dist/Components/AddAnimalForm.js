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
exports.AddNewAnimalForm = void 0;
const React = __importStar(require("react"));
const nanoid_1 = require("nanoid");
const react_hook_form_1 = require("react-hook-form");
const Button_1 = __importDefault(require("@mui/material/Button"));
const TextField_1 = __importDefault(require("@mui/material/TextField"));
const Dialog_1 = __importDefault(require("@mui/material/Dialog"));
const DialogActions_1 = __importDefault(require("@mui/material/DialogActions"));
const DialogContent_1 = __importDefault(require("@mui/material/DialogContent"));
const DialogContentText_1 = __importDefault(require("@mui/material/DialogContentText"));
const DialogTitle_1 = __importDefault(require("@mui/material/DialogTitle"));
const AddNewAnimalForm = ({ open, handleCloseForm, handleAddAnimal, }) => {
    const { control, handleSubmit, formState: { errors }, } = (0, react_hook_form_1.useForm)();
    const onSubmit = (data) => {
        const newAnimal = Object.assign({ id: (0, nanoid_1.nanoid)() }, data);
        handleAddAnimal(newAnimal);
        handleCloseForm();
    };
    return (React.createElement(Dialog_1.default, { open: open, onClose: handleCloseForm },
        React.createElement(DialogTitle_1.default, null, "Add Your Animal"),
        React.createElement(DialogContent_1.default, null,
            React.createElement(DialogContentText_1.default, null, "Please fill in the information about your animal."),
            React.createElement("form", { onSubmit: handleSubmit(onSubmit) },
                React.createElement(react_hook_form_1.Controller, { name: "name", control: control, defaultValue: "", rules: {
                        required: "This field is required",
                    }, render: ({ field }) => {
                        var _a;
                        return (React.createElement(TextField_1.default, Object.assign({}, field, { autoFocus: true, margin: "dense", id: "name", label: "Animal Name", type: "text", fullWidth: true, variant: "standard", error: !!errors.name, helperText: errors.name ? errors.name.message : "", value: (_a = field.value) !== null && _a !== void 0 ? _a : "" })));
                    } }),
                React.createElement(react_hook_form_1.Controller, { name: "age", control: control, defaultValue: undefined, rules: {
                        required: "This field is required",
                        validate: (v) => (v !== undefined && v > 0) || "Age must be a positive number",
                    }, render: ({ field }) => {
                        var _a;
                        return (React.createElement(TextField_1.default, Object.assign({}, field, { margin: "dense", id: "age", label: "Animal Age (in years)", type: "number", fullWidth: true, variant: "standard", error: !!errors.age, helperText: errors.age ? errors.age.message : "", inputProps: { min: 1 }, value: (_a = field.value) !== null && _a !== void 0 ? _a : "" })));
                    } }),
                React.createElement(react_hook_form_1.Controller, { name: "description", control: control, render: ({ field }) => {
                        var _a;
                        return (React.createElement(TextField_1.default, Object.assign({}, field, { margin: "dense", id: "description", label: "Animal Description", type: "text", fullWidth: true, multiline: true, variant: "standard", value: (_a = field.value) !== null && _a !== void 0 ? _a : "" })));
                    } }),
                React.createElement(DialogActions_1.default, null,
                    React.createElement(Button_1.default, { onClick: handleCloseForm }, "Cancel"),
                    React.createElement(Button_1.default, { type: "submit" }, "Add Animal"))))));
};
exports.AddNewAnimalForm = AddNewAnimalForm;
//# sourceMappingURL=AddAnimalForm.js.map