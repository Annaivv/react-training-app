import * as React from "react";
import { nanoid } from "nanoid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export const AddAnimalForm = ({ open, handleCloseForm, handleAddAnimal }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    const name = formJson.animalName;
    const age = formJson.animalAge;
    const description = formJson.animalDescription;
    const newAnimal = { id: nanoid(), name, age, description };
    handleAddAnimal(newAnimal);
    handleCloseForm();
  };

  return (
    <Dialog open={open} onClose={handleCloseForm}>
      <form onSubmit={handleSubmit}>
        <DialogTitle>Add Your Animal</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill in the information about your animal.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="animalName"
            label="Animal Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="age"
            name="animalAge"
            label="Animal Age (in years)"
            type="number"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="description"
            name="animalDescription"
            label="Animal Description"
            type="text"
            fullWidth
            multiline
            variant="standard"
          />
          <input
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
          </label>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseForm}>Cancel</Button>
          <Button type="submit">Add Animal</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
