import * as React from "react";
import { ItemsList } from "../Components/ItemsList";
import { getAnimals } from "../fakeAPI-animals";
import { AddAnimalForm } from "../Components/AddAnimalForm";

export interface Animal {
  id: string;
  name: string;
  description?: string;
  age: Number;
}

export const AnimalsList = () => {
  return (
    <ItemsList<Animal>
      itemsKey="animals"
      getItems={getAnimals}
      AddItemForm={AddAnimalForm}
    />
  );
};

// export interface Feed {
//   id: number;
//   type: string;
//   quantity: string;
// }

// import * as React from "react";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import Stack from "@mui/material/Stack";
// import { styled } from "@mui/material/styles";
// import IconButton from "@mui/material/IconButton";
// import AddCircleIcon from "@mui/icons-material/AddCircle";
// import ClearIcon from "@mui/icons-material/Clear";
// import { getAnimals } from "../fakeAPI-animals";
// import { Link, useLocation } from "react-router-dom";
// import { AddAnimalForm } from "../Components/AddAnimalForm";
// import { Typography } from "@mui/material";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   textAlign: "center",
//   display: "flex",
//   justifyContent: "space-between",
//   color: theme.palette.text.secondary,
// }));

// export const Animals = () => {
//   const location = useLocation();
//   const [animals, setAnimals] = React.useState(() => {
//     const savedAnimals = localStorage.getItem("animals");
//     return savedAnimals ? JSON.parse(savedAnimals) : getAnimals();
//   });
//   const [open, setOpen] = React.useState(false);

//   const handleOpenForm = () => setOpen(true);

//   const handleCloseForm = () => setOpen(false);

//   const handleAddAnimal = (newAnimal) => {
//     setAnimals((prevAnimals) => {
//       const updatedAnimals = [...prevAnimals, newAnimal];
//       localStorage.setItem("animals", JSON.stringify(updatedAnimals));
//       return updatedAnimals;
//     });
//   };

//   const handleRemoveAnimal = (id) => {
//     setAnimals((prevAnimals) => {
//       const updatedAnimals = prevAnimals.filter((animal) => animal.id !== id);
//       localStorage.setItem("animals", JSON.stringify(updatedAnimals));
//       return updatedAnimals;
//     });
//   };

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
//                 onClick={() => handleRemoveAnimal(animal.id)}
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
//         <AddAnimalForm
//           open={open}
//           handleCloseForm={handleCloseForm}
//           handleAddItem={handleAddAnimal}
//         />
//       )}
//     </>
//   );
// };
