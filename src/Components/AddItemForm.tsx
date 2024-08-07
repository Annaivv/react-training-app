import * as React from "react";
import { nanoid } from "nanoid";
import { useForm, Controller } from "react-hook-form";
import type { SubmitHandler, DefaultValues } from "react-hook-form";
import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { FormValues } from "../commonTypes";

export const defaultValues: DefaultValues<FormValues> = {
  name: "",
  description: "",
};

interface AddItemFormProps {
  open: boolean;
  additionalFields: React.ReactNode;
  handleCloseForm: () => void;
  handleAddItem: (newItem: { id: string } & FormValues) => void;
}

export const AddItemForm: React.FC<AddItemFormProps> = ({
  open,
  handleCloseForm,
  handleAddItem,
  additionalFields,
}) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues,
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const newItem = {
      id: nanoid(),
      ...data,
    };
    handleAddItem(newItem);
    handleCloseForm();
    console.log(newItem);
  };

  return (
    <Container sx={{ padding: "16px" }}>
      <Dialog
        open={open}
        onClose={handleCloseForm}
        sx={{ paddingLeft: "24px", paddingRight: "24px" }}
      >
        <DialogTitle>Please fill in the information</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              render={({ field }) => (
                <TextField
                  {...field}
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Name"
                  type="text"
                  variant="filled"
                  fullWidth
                  error={!!errors.name}
                  helperText={errors.name ? errors.name.message : ""}
                />
              )}
              name="name"
              control={control}
              rules={{
                required: "This field is required",
              }}
            />
            <Controller
              render={({ field }) => (
                <TextField
                  {...field}
                  autoFocus
                  margin="dense"
                  id="description"
                  label="Description"
                  type="text"
                  variant="filled"
                  fullWidth
                  error={!!errors.description}
                  helperText={
                    errors.description ? errors.description.message : ""
                  }
                />
              )}
              name="description"
              control={control}
            />
            {additionalFields}
            <DialogActions>
              <Button onClick={handleCloseForm}>Cancel</Button>
              <Button type="submit">Add Item</Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </Container>
  );
};
