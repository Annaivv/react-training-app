import * as React from "react";
import { useStore } from "zustand";
import { animalStore } from "../store";
import { List } from "../Components/List";
import { Item } from "../Components/ListItem";

export const Animals: React.FC = () => {
  const animals = useStore(animalStore, (state) => state.animals);
  const addAnimal = useStore(animalStore, (state) => state.addAnimal);
  const removeAnimal = useStore(animalStore, (state) => state.removeAnimal);

  return (
    <List
      items={animals}
      onAdd={addAnimal}
      onRemove={removeAnimal}
      renderItem={(animal, onRemove) => (
        <Item
          id={animal.id}
          name={animal.name}
          linkTo={`/animals/${animal.id}`}
          onRemove={onRemove}
        />
      )}
    />
  );
};

// import { useStore } from "zustand";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import Stack from "@mui/material/Stack";
// import { styled } from "@mui/material/styles";
// import IconButton from "@mui/material/IconButton";
// import AddCircleIcon from "@mui/icons-material/AddCircle";
// import ClearIcon from "@mui/icons-material/Clear";
// import { Link, useLocation } from "react-router-dom";
// import { AddNewAnimalForm } from "../Components/AddAnimalForm";
// import { Typography } from "@mui/material";
// import { animalStore } from "../store";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   textAlign: "center",
//   display: "flex",
//   justifyContent: "space-between",
//   color: theme.palette.text.secondary,
// }));

// export const Animals: React.FC = () => {
//   const location = useLocation();
//   const animals = useStore(animalStore, (state) => state.animals);
//   const addAnimal = useStore(animalStore, (state) => state.addAnimal);
//   const removeAnimal = useStore(animalStore, (state) => state.removeAnimal);
//   const [open, setOpen] = React.useState(false);

//   const handleOpenForm = () => setOpen(true);

//   const handleCloseForm = () => setOpen(false);

//   return (
//     <>
//       <Box sx={{ width: "100%", padding: "24px", textAlign: "center" }}>
//         <Stack spacing={2}>
//           {animals.map((animal) => (
//             <Item key={animal.id}>
//               <Link
//                 to={`/animals/${animal.id}`}
//                 state={{ from: location }}
//                 style={{ textDecoration: "none", flexGrow: 1 }}
//               >
//                 <Typography color="primary">{animal.name}</Typography>
//               </Link>
//               <IconButton
//                 color="error"
//                 aria-label="remove animal"
//                 onClick={() => removeAnimal(animal.id)}
//               >
//                 <ClearIcon fontSize="medium" />
//               </IconButton>
//             </Item>
//           ))}
//         </Stack>
//         <IconButton
//           color="primary"
//           aria-label="add animal"
//           sx={{ paddingTop: "24px" }}
//           onClick={handleOpenForm}
//         >
//           <AddCircleIcon fontSize="large" />
//         </IconButton>
//       </Box>
//       {open && (
//         <AddNewAnimalForm
//           open={open}
//           handleCloseForm={handleCloseForm}
//           handleAddAnimal={(newAnimal) => addAnimal(newAnimal)}
//         />
//       )}
//     </>
//   );
// };
