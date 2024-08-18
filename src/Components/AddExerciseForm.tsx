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
  description?: string;
}

interface AddNewExerciseFormProps {
  open: boolean;
  handleCloseForm: () => void;
  handleAddExercise: (newExercise: IFormInput & { id: string }) => void;
}

export const AddNewExerciseForm: React.FC<AddNewExerciseFormProps> = ({
  open,
  handleCloseForm,
  handleAddExercise,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const newExercise = {
      id: nanoid(),
      ...data,
    };
    handleAddExercise(newExercise);
    handleCloseForm();
  };

  return (
    <Dialog open={open} onClose={handleCloseForm}>
      <DialogTitle>Add New Exercise</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please fill in the information about your exercise.
        </DialogContentText>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{
              required: "This field is required",
            }}
            render={({ field }) => (
              <TextField
                {...field}
                autoFocus
                margin="dense"
                id="name"
                label="Exercise Title"
                type="text"
                fullWidth
                variant="standard"
                error={!!errors.name}
                helperText={errors.name ? errors.name.message : ""}
                value={field.value ?? ""}
              />
            )}
          />

          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                margin="dense"
                id="description"
                label="Exercise Description"
                type="text"
                fullWidth
                multiline
                variant="standard"
                value={field.value ?? ""}
              />
            )}
          />
          <DialogActions>
            <Button onClick={handleCloseForm}>Cancel</Button>
            <Button type="submit">Add Exercise</Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};
