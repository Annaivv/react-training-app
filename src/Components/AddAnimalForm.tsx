import * as React from "react";
import { nanoid } from "nanoid";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

interface IFormInput {
  name: string;
  age?: number;
  description?: string;
}

interface AddNewAnimalFormProps {
  open: boolean;
  handleCloseForm: () => void;
  handleAddAnimal: (newAnimal: IFormInput & { id: string }) => void;
}

export const AddNewAnimalForm: React.FC<AddNewAnimalFormProps> = ({
  open,
  handleCloseForm,
  handleAddAnimal,
}) => {
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = () => {
    const newAnimal = {
      id: nanoid(),
      name: watch("name"),
      age: watch("age"),
      description: watch("description"),
    };
    handleAddAnimal(newAnimal);
    handleCloseForm();
  };

  console.log(errors);

  return (
    <Dialog open={open} onClose={handleCloseForm}>
      <DialogTitle>Add Your Animal</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please fill in the information about your animal.
        </DialogContentText>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            {...register("name", {
              required: "This field is required",
            })}
            name="name"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                autoFocus
                margin="dense"
                id="name"
                label="Animal Name"
                type="text"
                fullWidth
                variant="standard"
                error={!!errors.name}
                helperText={errors.name ? errors.name.message : ""}
              />
            )}
          />

          <Controller
            {...register("age", {
              required: "This field is required",
              valueAsNumber: true,
              validate: (v) =>
                (v !== undefined && v > 0) || "Age must be a positive number",
            })}
            name="age"
            control={control}
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
              />
            )}
          />

          <Controller
            {...register("description")}
            name="description"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                margin="dense"
                id="description"
                label="Animal Description"
                type="text"
                fullWidth
                multiline
                variant="standard"
              />
            )}
          />

          {/* <input
            accept="image/*"
            style={{ display: "none" }}
            id="photo"
            name="animalPhoto"
            type="file"
          />
          <label htmlFor="photo">
            <Button variant="contained" component="span">
              Upload Photo
            </Button>
          </label> */}

          <DialogActions>
            <Button onClick={handleCloseForm}>Cancel</Button>
            <Button type="submit">Add Animal</Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};
