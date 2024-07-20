import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { getAnimals } from "../fakeAPI";
import { Link, useLocation } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const Animals = () => {
  const location = useLocation();
  const animals = getAnimals();

  return (
    <Box sx={{ width: "100%", paddingTop: "24px", textAlign: "center" }}>
      <Stack spacing={2}>
        {animals.map((animal) => (
          <Link
            to={`${animal.id}`}
            state={{ from: location }}
            key={animal.id}
            sx={{ textDecoration: "none" }}
          >
            <Item>{animal.name}</Item>
          </Link>
        ))}
      </Stack>
      <IconButton
        color="primary"
        aria-label="add animal"
        sx={{ paddingTop: "24px" }}
      >
        <AddCircleIcon fontSize="large" />
      </IconButton>
    </Box>
  );
};
