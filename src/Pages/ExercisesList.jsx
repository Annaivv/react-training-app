import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { getExercises } from "../fakeAPI-exercises";
import { Link, useLocation } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const ExercisesList = () => {
  const exercises = getExercises();
  const location = useLocation();

  return (
    <Box sx={{ width: "100%", paddingTop: "24px" }}>
      <Stack spacing={2}>
        {exercises.map((exercise) => (
          <Item key={exercise.id} exercise={exercise}>
            <Link
              to={`/exercises/${exercise.id}`}
              state={{ from: location }}
              style={{ textDecoration: "none", flexGrow: 1 }}
            >
              <Typography>{exercise.title}</Typography>
            </Link>
          </Item>
        ))}
      </Stack>
    </Box>
  );
};
