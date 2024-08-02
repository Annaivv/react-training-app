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
exports.Animals = void 0;
const React = __importStar(require("react"));
const zustand_1 = require("zustand");
const store_1 = require("../store");
const List_1 = require("../Components/List");
const ListItem_1 = require("../Components/ListItem");
const Animals = () => {
    const animals = (0, zustand_1.useStore)(store_1.animalStore, (state) => state.animals);
    const addAnimal = (0, zustand_1.useStore)(store_1.animalStore, (state) => state.addAnimal);
    const removeAnimal = (0, zustand_1.useStore)(store_1.animalStore, (state) => state.removeAnimal);
    return (React.createElement(List_1.List, { items: animals, onAdd: addAnimal, onRemove: removeAnimal, renderItem: (animal, onRemove) => (React.createElement(ListItem_1.Item, { id: animal.id, name: animal.name, linkTo: `/animals/${animal.id}`, onRemove: onRemove })) }));
};
exports.Animals = Animals;
//# sourceMappingURL=AnimalsList.js.map