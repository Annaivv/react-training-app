import * as React from "react";
import { nanoid } from "nanoid";
import { useForm, Controller } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { AddItemFormProps, FormValues } from "../commonTypes";

export const AddItemForm: React.FC<AddItemFormProps> = ({
  open,
  handleCloseForm,
  handleAddItem,
  children,
}) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>();

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
                  defaultValue={undefined}
                  id="name"
                  label="Name"
                  type="text"
                  variant="filled"
                  fullWidth
                  error={!!errors.name}
                  helperText={errors.name ? errors.name.message : ""}
                  value={field.value ?? ""}
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
                  defaultValue={undefined}
                  id="description"
                  label="Description"
                  multiline
                  type="text"
                  variant="filled"
                  rows={4}
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
            {children}
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
