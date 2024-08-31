import * as React from "react";
import { useParams, useLocation } from "react-router-dom";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Exercise } from "../interfaces/exerciseInterfaces";
import { BackLink } from "../Components/BackLink";
import { VisuallyHiddenInput } from "../styledComponents";
import { exercisesKey } from "../constants";

export const ExerciseCard = () => {
  const { id } = useParams<{ id: string }>();

  const [exercise, setExercise] = React.useState<Exercise | undefined>(
    undefined
  );

  const [imageSrc, setImageSrc] = React.useState<string | undefined>(undefined);
  const [buttonText, setButtonText] = React.useState<string>("Upload");

  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/exercises";

  React.useEffect(() => {
    const savedExercises = JSON.parse(
      localStorage.getItem(exercisesKey) || "[]"
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

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result as string;

        const storedExercises = localStorage.getItem(exercisesKey);
        if (storedExercises) {
          const exercises = JSON.parse(storedExercises);

          const updatedExercises = exercises.map((exercise: any) => {
            if (exercise.id === id) {
              return { ...exercise, image: base64Image };
            }
            return exercise;
          });

          localStorage.setItem(exercisesKey, JSON.stringify(updatedExercises));

          setImageSrc(base64Image);
          setButtonText("Change");
        }
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <Container sx={{ paddingBottom: 3, paddingTop: 3 }}>
      <BackLink to={backLinkHref}>Back to list</BackLink>
      <Card sx={{ maxWidth: 345, margin: "0 auto", marginTop: 3 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {exercise.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {exercise.description}
          </Typography>
          <Box>
            {imageSrc ? (
              <img
                src={imageSrc}
                alt="Uploaded exercise"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            ) : null}

            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
            >
              {buttonText} image
              <VisuallyHiddenInput type="file" onChange={handleFileChange} />
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};
