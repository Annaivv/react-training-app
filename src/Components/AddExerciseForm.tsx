import * as React from "react";
import { AddExerciseFormProps } from "../interfaces/exerciseInterfaces";
import { AddItemForm } from "./AddItemForm";

export const AddExerciseForm: React.FC<AddExerciseFormProps> = ({
  open,
  handleCloseForm,
  handleAddExercise,
}) => {
  return (
    <AddItemForm
      open={open}
      handleCloseForm={handleCloseForm}
      handleAddItem={handleAddExercise}
    />
  );
};
