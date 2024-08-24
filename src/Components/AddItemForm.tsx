//import { nanoid } from "nanoid";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { AddItemFormProps, FormInput } from "../interfaces/commonInterfaces";

function generateTimestampId(): number {
  return Date.now();
}

export const AddItemForm = ({
  open,
  handleCloseForm,
  handleAddItem,
  children,
}: AddItemFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    const item = {
      id: generateTimestampId(),
      ...data,
    };
    handleAddItem(item);
    handleCloseForm();
  };

  return (
    <Dialog open={open} onClose={handleCloseForm}>
      <DialogTitle>Add Your Item</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please fill in the information about your item.
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
                label="Animal Name"
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
                label="Item Description"
                type="text"
                fullWidth
                multiline
                variant="standard"
                value={field.value ?? ""}
              />
            )}
          />
          {children}
          <DialogActions>
            <Button onClick={handleCloseForm}>Cancel</Button>
            <Button type="submit">Add Item</Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};
