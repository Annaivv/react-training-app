import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { AddNewItemForm } from "./AddItemForm";
import { AnimalFormInput, AddNewAnimalFormProps } from "../commonTypes";

export const AddNewAnimalForm: React.FC<AddNewAnimalFormProps> = ({
  open,
  handleCloseForm,
  handleAddAnimal,
}) => {
  const {
    control,
    formState: { errors },
  } = useForm<AnimalFormInput>();

  return (
    <AddNewItemForm
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
    </AddNewItemForm>
  );
};

// interface IFormInput {
//   name: string;
//   age: number;
//   description?: string;
// }

// interface AddNewAnimalFormProps {
//   open: boolean;
//   handleCloseForm: () => void;
//   handleAddAnimal: (newAnimal: IFormInput & { id: string }) => void;
// }

// export const AddNewAnimalForm: React.FC<AddNewAnimalFormProps> = ({
//   open,
//   handleCloseForm,
//   handleAddAnimal,
// }) => {
//   const {
//     control,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<IFormInput>();

//   const onSubmit: SubmitHandler<IFormInput> = (data) => {
//     const newAnimal = {
//       id: nanoid(),
//       ...data,
//     };
//     handleAddAnimal(newAnimal);
//     handleCloseForm();
//   };

//   return (
//     <Dialog open={open} onClose={handleCloseForm}>
//       <DialogTitle>Add Your Animal</DialogTitle>
//       <DialogContent>
//         <DialogContentText>
//           Please fill in the information about your animal.
//         </DialogContentText>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <Controller
//             name="name"
//             control={control}
//             defaultValue=""
//             rules={{
//               required: "This field is required",
//             }}
//             render={({ field }) => (
//               <TextField
//                 {...field}
//                 autoFocus
//                 margin="dense"
//                 id="name"
//                 label="Animal Name"
//                 type="text"
//                 fullWidth
//                 variant="standard"
//                 error={!!errors.name}
//                 helperText={errors.name ? errors.name.message : ""}
//                 value={field.value ?? ""}
//               />
//             )}
//           />

//           <Controller
//             name="age"
//             control={control}
//             defaultValue={undefined}
//             rules={{
//               required: "This field is required",
//               validate: (v) =>
//                 (v !== undefined && v > 0) || "Age must be a positive number",
//             }}
//             render={({ field }) => (
//               <TextField
//                 {...field}
//                 margin="dense"
//                 id="age"
//                 label="Animal Age (in years)"
//                 type="number"
//                 fullWidth
//                 variant="standard"
//                 error={!!errors.age}
//                 helperText={errors.age ? errors.age.message : ""}
//                 inputProps={{ min: 1 }}
//                 value={field.value ?? ""}
//               />
//             )}
//           />

//           <Controller
//             name="description"
//             control={control}
//             render={({ field }) => (
//               <TextField
//                 {...field}
//                 margin="dense"
//                 id="description"
//                 label="Animal Description"
//                 type="text"
//                 fullWidth
//                 multiline
//                 variant="standard"
//                 value={field.value ?? ""}
//               />
//             )}
//           />
//           <DialogActions>
//             <Button onClick={handleCloseForm}>Cancel</Button>
//             <Button type="submit">Add Animal</Button>
//           </DialogActions>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// };
