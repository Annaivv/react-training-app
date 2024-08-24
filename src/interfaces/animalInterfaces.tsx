import { Item, FormInput, AddItemFormProps } from "./commonInterfaces";

export interface Animal extends Item {
  age: number;
}

export interface AnimalFormInput extends FormInput {
  age: number;
}
export interface AddAnimalFormProps
  extends Omit<AddItemFormProps, "handleAddItem" | "children"> {
  handleAddAnimal: (newAnimal: Animal) => void;
}
