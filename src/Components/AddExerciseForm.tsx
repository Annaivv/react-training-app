import * as React from "react";
import { AddItemFormProps } from "../commonTypes";
import { AddItemForm } from "./AddItemForm";

// interface ExerciseFormValues extends FormValues {
//   age: number;
// }

//interface AddAnimalFormProps extends Omit<AddItemFormProps, "children"> {}

export const AddExerciseForm: React.FC<AddItemFormProps> = ({
  open,
  handleCloseForm,
  handleAddItem,
}) => {
  return (
    <AddItemForm
      open={open}
      handleCloseForm={handleCloseForm}
      handleAddItem={handleAddItem}
      children={null}
    />
  );
};
