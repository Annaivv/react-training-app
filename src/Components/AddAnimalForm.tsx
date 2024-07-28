import * as React from "react";
import { nanoid } from "nanoid";
import { useForm, SubmitHandler } from "react-hook-form";
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
          <TextField
            {...register("name", { required: "This is required field" })}
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="Animal Name"
            type="text"
            fullWidth
            variant="standard"
          />
          {/* <label>Animal Name</label>
          <input
            {...register("animalName", { required: "This is required field" })}
          /> */}

          <label>Animal Age</label>
          <input type="number" {...register("age")} />
          <label>Animal Description</label>
          <input {...register("description")} />
          <DialogActions>
            <Button onClick={handleCloseForm}>Cancel</Button>
            <Button type="submit">Add Animal</Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

// export const AddAnimalForm = ({ open, handleCloseForm, handleAddAnimal }) => {
//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const formData = new FormData(event.currentTarget);
//     const formJson = Object.fromEntries(formData.entries());
//     const name = formJson.animalName;
//     const age = formJson.animalAge;
//     const description = formJson.animalDescription;
//     const newAnimal = { id: nanoid(), name, age, description };
//     handleAddAnimal(newAnimal);
//     handleCloseForm();
//   };

//   return (
//     <Dialog open={open} onClose={handleCloseForm}>
//       <form onSubmit={handleSubmit}>
//         <DialogTitle>Add Your Animal</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             Please fill in the information about your animal.
//           </DialogContentText>
//           <TextField
//             autoFocus
//             required
//             margin="dense"
//             id="name"
//             name="animalName"
//             label="Animal Name"
//             type="text"
//             fullWidth
//             variant="standard"
//           />
//           <TextField
//             margin="dense"
//             id="age"
//             name="animalAge"
//             label="Animal Age (in years)"
//             type="number"
//             fullWidth
//             variant="standard"
//           />
//           <TextField
//             margin="dense"
//             id="description"
//             name="animalDescription"
//             label="Animal Description"
//             type="text"
//             fullWidth
//             multiline
//             variant="standard"
//           />
//           <input
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
//           </label>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseForm}>Cancel</Button>
//           <Button type="submit">Add Animal</Button>
//         </DialogActions>
//       </form>
//     </Dialog>
//   );
// };
