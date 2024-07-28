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
const Dialog_1 = __importDefault(require("@mui/material/Dialog"));
const DialogActions_1 = __importDefault(require("@mui/material/DialogActions"));
const DialogContent_1 = __importDefault(require("@mui/material/DialogContent"));
const DialogContentText_1 = __importDefault(require("@mui/material/DialogContentText"));
const DialogTitle_1 = __importDefault(require("@mui/material/DialogTitle"));
const AddNewAnimalForm = ({ open, handleCloseForm, handleAddAnimal, }) => {
    const { register, handleSubmit } = (0, react_hook_form_1.useForm)();
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
                React.createElement("label", null, "Animal Name"),
                React.createElement("input", Object.assign({}, register("animalName", { required: true }))),
                React.createElement("label", null, "Animal Age"),
                React.createElement("input", Object.assign({ type: "number" }, register("animalAge"))),
                React.createElement("label", null, "Animal Description"),
                React.createElement("input", Object.assign({}, register("animalDescription"))),
                React.createElement(DialogActions_1.default, null,
                    React.createElement(Button_1.default, { onClick: handleCloseForm }, "Cancel"),
                    React.createElement(Button_1.default, { type: "submit" }, "Add Animal"))))));
};
exports.AddNewAnimalForm = AddNewAnimalForm;
//# sourceMappingURL=AddAnimalForm.js.map