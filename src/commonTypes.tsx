import React from "react";

interface Item {
  id: string;
  name: string;
}

export interface Animal extends Item {
  age: number;
  description?: string;
}

export interface Exercise extends Item {
  description?: string;
}

export interface FormInput {
  name: string;
  description?: string;
}

export interface AnimalFormInput extends FormInput {
  age: number;
}

export interface AddNewItemFormProps {
  open: boolean;
  handleCloseForm: () => void;
  handleAddItem: (item: any) => void;
  children?: React.ReactNode;
}

export interface AddNewAnimalFormProps
  extends Omit<AddNewItemFormProps, "handleAddItem" | "children"> {
  handleAddAnimal: (newAnimal: Animal) => void;
}
