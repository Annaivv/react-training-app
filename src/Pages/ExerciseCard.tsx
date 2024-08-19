import * as React from "react";
import { useParams, useLocation } from "react-router-dom";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Exercise } from "../commonTypes";
import { BackLink } from "../Components/BackLink";

export const ExerciseCard = () => {
  const { id } = useParams<{ id: string }>();
  const [exercise, setExercise] = React.useState<Exercise | undefined>(
    undefined
  );
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/exercises";

  React.useEffect(() => {
    const savedExercises = JSON.parse(
      localStorage.getItem("exercises") || "[]"
    ) as Exercise[];

    if (savedExercises.length === 0) {
      console.warn("No exercises found in localStorage.");
    }

    const foundExercise = savedExercises.find((exercise) => exercise.id === id);

    if (!foundExercise) {
      console.error(`Exercise with id ${id} not found.`);
    }

    setExercise(foundExercise);
  }, [id]);

  if (!exercise) {
    return <div>Loading...</div>;
  }

  return (
    <Container sx={{ paddingBottom: 3, paddingTop: 3 }}>
      <BackLink to={backLinkHref}>Back to list</BackLink>
      <Card sx={{ maxWidth: 345, marginTop: 3 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {exercise.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {exercise.description}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};
