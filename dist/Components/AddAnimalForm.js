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
exports.AddAnimalForm = void 0;
const React = __importStar(require("react"));
const react_hook_form_1 = require("react-hook-form");
const TextField_1 = __importDefault(require("@mui/material/TextField"));
const AddItemForm_1 = require("./AddItemForm");
const AddAnimalForm = ({ open, handleCloseForm, handleAddItem, }) => {
    const { control, formState: { errors }, } = (0, react_hook_form_1.useForm)();
    return (React.createElement(AddItemForm_1.AddItemForm, { open: open, handleCloseForm: handleCloseForm, handleAddItem: handleAddItem, children: React.createElement(react_hook_form_1.Controller, { name: "age", control: control, defaultValue: undefined, rules: {
                required: "This field is required",
                validate: (v) => (v !== undefined && v > 0) || "Age must be a positive number",
            }, render: ({ field }) => {
                var _a;
                return (React.createElement(TextField_1.default, Object.assign({}, field, { margin: "dense", id: "age", label: "Animal Age (in years)", type: "number", fullWidth: true, variant: "standard", error: !!errors.age, helperText: errors.age ? errors.age.message : "", inputProps: { min: 1 }, value: (_a = field.value) !== null && _a !== void 0 ? _a : "" })));
            } }) }));
};
exports.AddAnimalForm = AddAnimalForm;
//# sourceMappingURL=AddAnimalForm.js.map