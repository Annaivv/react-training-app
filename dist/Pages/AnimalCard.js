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
exports.AnimalCard = void 0;
const React = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Container_1 = __importDefault(require("@mui/material/Container"));
const Button_1 = __importDefault(require("@mui/material/Button"));
const Card_1 = __importDefault(require("@mui/material/Card"));
const CardContent_1 = __importDefault(require("@mui/material/CardContent"));
const CardMedia_1 = __importDefault(require("@mui/material/CardMedia"));
const Typography_1 = __importDefault(require("@mui/material/Typography"));
const CardActions_1 = __importDefault(require("@mui/material/CardActions"));
const BackLink_1 = require("../Components/BackLink");
const store_1 = require("../store");
const AnimalCard = () => {
    var _a, _b;
    const { id } = (0, react_router_dom_1.useParams)();
    const animals = store_1.animalStore.getState().animals;
    const animal = animals.find((animal) => animal.id === id);
    const location = (0, react_router_dom_1.useLocation)();
    const backLinkHref = (_b = (_a = location.state) === null || _a === void 0 ? void 0 : _a.from) !== null && _b !== void 0 ? _b : "/animals";
    const horseImage = require("../assets/horse.jpg");
    if (!animal) {
        return React.createElement(Typography_1.default, null, "Animal not found");
    }
    return (React.createElement(Container_1.default, { sx: { paddingBottom: 3, paddingTop: 3 } },
        React.createElement(BackLink_1.BackLink, { to: backLinkHref }, "Back to list"),
        React.createElement(Card_1.default, { sx: { maxWidth: 345, marginTop: 3 } },
            React.createElement(CardMedia_1.default, { component: "img", height: "200", image: horseImage, alt: "horse" }),
            React.createElement(CardContent_1.default, null,
                React.createElement(Typography_1.default, { gutterBottom: true, variant: "h5", component: "div" }, animal.name),
                React.createElement(Typography_1.default, { variant: "body2", sx: { marginBottom: 2 } },
                    "Age: ",
                    animal.age),
                React.createElement(Typography_1.default, { variant: "body2", color: "text.secondary" }, animal.description)),
            React.createElement(CardActions_1.default, { sx: { display: "flex", justifyContent: "space-around" } },
                React.createElement(Button_1.default, { size: "small" }, "Vet info"),
                React.createElement(Button_1.default, { size: "small", id: "exercisesList" }, "Exercises")))));
};
exports.AnimalCard = AnimalCard;
//# sourceMappingURL=AnimalCard.js.map