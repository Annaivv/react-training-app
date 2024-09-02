import * as React from "react";
import { useParams, useLocation } from "react-router-dom";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import AudioFileIcon from "@mui/icons-material/AudioFile";
import { Exercise } from "../interfaces/exerciseInterfaces";
import { BackLink } from "../Components/BackLink";
import { VisuallyHiddenInput } from "../styledComponents";
import { exercisesKey } from "../constants";
import { supabase } from "../supabaseClient";
//import MediaControlCard from "../Components/AudioPlayer";
//import { CardActionArea } from "@mui/material";
//import AudioPlayer from "../Components/AudioPlayer";

export const ExerciseCard = () => {
  const { id } = useParams<{ id: string }>();

  const [exercise, setExercise] = React.useState<Exercise | null>(null);
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
      }
    };

    fetchExerciseData();
  }, [id]);

  if (!exercise) {
    return <div>Loading...</div>;
  }

  const handleImageFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
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

  const uploadAudioFile = async (file: File) => {
    try {
      const fileName = `${file.name}`;
      const filePath = `dogs/${fileName}`;
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("exercise-audio")
        .upload(filePath, file);

      if (uploadError) {
        console.error("Error uploading file:", uploadError.message);
        return;
      }
      console.log("File uploaded successfully:", uploadData);

      const { data: publicUrlData } = supabase.storage
        .from("exercise-audio")
        .getPublicUrl(filePath);

      const audioLink = publicUrlData.publicUrl;
      console.log("Public URL of uploaded file:", audioLink);

      const { data: updateData, error: updateError } = await supabase
        .from(exercisesKey)
        .update({ audio_file: audioLink })
        .eq("id", exercise.id)
        .select();

      if (updateError) {
        console.error("Unable to update audio file in database", updateError);
        return;
      }

      console.log("Update successful:", updateData);
      setExercise({ ...exercise, audio_file: audioLink });
    } catch (error) {
      console.error("An unexpected error occurred during file upload:", error);
    }
  };

  const handleAudioFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const uploadedFile = event.target.files?.[0];

    if (uploadedFile) {
      uploadAudioFile(uploadedFile);
      console.log(uploadedFile.name);
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
              sx={{ display: "flex", marginTop: "8px", marginBottom: "8px" }}
            >
              {exercise.image ? "Change " : "Upload "}image
              <VisuallyHiddenInput
                type="file"
                onChange={handleImageFileChange}
              />
            </Button>
          </Box>

          <Box>
            {exercise.audio_file ? (
              <figure style={{ margin: 0, marginTop: "12px" }}>
                <audio controls src={exercise.audio_file}></audio>
              </figure>
            ) : null}

            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<AudioFileIcon />}
              sx={{ display: "flex", marginTop: "8px", marginBottom: "8px" }}
            >
              {buttonText} audio file
              <VisuallyHiddenInput
                type="file"
                onChange={handleAudioFileChange}
              />
            </Button>
          </Box>

          {/* <AudioPlayer /> */}
        </CardContent>
      </Card>
    </Container>
  );
};
