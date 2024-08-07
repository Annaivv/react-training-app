import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { AddItemFormProps, FormValues } from "../commonTypes";
import { AddItemForm } from "./AddItemForm";

interface AnimalFormValues extends FormValues {
  age: number;
}

interface AddAnimalFormProps extends Omit<AddItemFormProps, "children"> {}

export const AddAnimalForm: React.FC<AddAnimalFormProps> = ({
  open,
  handleCloseForm,
  handleAddItem,
}) => {
  const {
    control,
    formState: { errors },
  } = useForm<AnimalFormValues>();

  return (
    <AddItemForm
      open={open}
      handleCloseForm={handleCloseForm}
      handleAddItem={handleAddItem}
      children={
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
      }
    />
  );
};

//           {/* <input
//             accept="image/*"
//             style={{ display: "none" }}
//             id="photo"
//             name="animalPhoto"
//             type="file"
//           />
//           <label htmlFor="photo">
//             <Button variant="contained" component="span">
//               Upload Photo
//             </Button>
//           </label> */}
