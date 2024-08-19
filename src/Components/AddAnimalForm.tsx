import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { AddItemForm } from "./AddItemForm";
import {
  AnimalFormInput,
  AddAnimalFormProps,
} from "../interfaces/animalInterfaces";

export const AddAnimalForm: React.FC<AddAnimalFormProps> = ({
  open,
  handleCloseForm,
  handleAddAnimal,
}) => {
  const {
    control,
    formState: { errors },
  } = useForm<AnimalFormInput>();

  return (
    <AddItemForm
      open={open}
      handleCloseForm={handleCloseForm}
      handleAddItem={handleAddAnimal}
    >
      <Controller
        name="age"
        control={control}
        defaultValue={undefined}
        rules={{
          required: "This field is required",
          validate: (v) =>
            (v !== undefined && v > 0) || "Age must be a positive number",
        }}
        render={({ field }) => (
          <TextField
            {...field}
            margin="dense"
            id="age"
            label="Animal Age (in years)"
            type="number"
            fullWidth
            variant="standard"
            error={!!errors.age}
            helperText={errors.age ? errors.age.message : ""}
            inputProps={{ min: 1 }}
            value={field.value ?? ""}
          />
        )}
      />
    </AddItemForm>
  );
};
