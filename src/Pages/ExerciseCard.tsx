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
import { supabase } from "../supabaseClient";

export const ExerciseCard = () => {
  const { id } = useParams<{ id: string }>();

  const [exercise, setExercise] = React.useState<Exercise | null>(null);

  //const [imageSrc, setImageSrc] = React.useState<string | undefined>(undefined);
  const [buttonText, setButtonText] = React.useState<string>("Upload");

  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/exercises";

  const findExerciseById = async (exerciseId: string) => {
    const { data, error } = await supabase
      .from(exercisesKey)
      .select()
      .eq("id", exerciseId)
      .single();

    if (error) {
      console.error("No exercise found", error);
      return null;
    } else {
      return data as Exercise;
    }
  };

  React.useEffect(() => {
    const fetchExerciseData = async () => {
      if (id) {
        const fetchedExercise = await findExerciseById(id);
        setExercise(fetchedExercise);

        //Not working version of rendering an image from Supabase Storage
        // if (fetchedExercise && fetchedExercise.name) {
        //   const getExerciseImageUrl = async (fileName: string) => {
        //     const { data } = supabase.storage
        //       .from("exercise-pics")
        //       .getPublicUrl(`Dogs/${fileName}.jpg`);

        //     if (data) {
        //       setImageSrc(data.publicUrl);
        //     }
        //   };

        //   getExerciseImageUrl(fetchedExercise.name);
        // }
      }
    };

    fetchExerciseData();
  }, [id]);

  if (!exercise) {
    return <div>Loading...</div>;
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && exercise) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64Image = reader.result as string;

        try {
          const { data, error } = await supabase
            .from(exercisesKey)
            .update({ image: base64Image })
            .eq("id", exercise.id)
            .select();

          if (error) {
            console.error("Unable to load image", error);
          } else {
            console.log("Update successful", data);
            setExercise((prevExercise) =>
              prevExercise ? { ...prevExercise, image: base64Image } : null
            );
            setButtonText("Change");
          }
        } catch (error) {
          console.error("An error occurred during file upload:", error);
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
            {exercise.image ? (
              <img
                src={exercise.image}
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
