import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export const ExerciseCard = ({ exercise }) => {
  return (
    <Container>
      <Typography>{exercise.title}</Typography>
      <Typography>{exercise.description}</Typography>
    </Container>
  );
};
