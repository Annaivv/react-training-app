import * as React from "react";
import { useParams, useLocation } from "react-router-dom";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import horseImage from "../assets/horse.jpg";
import { BackLink } from "../Components/BackLink";
import useStore from "../store";

export const AnimalCard = () => {
  const { id } = useParams();
  const { animals } = useStore();
  const animal = animals.find((animal) => animal.id === id);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/animals";

  if (!animal) {
    return <Typography>Animal not found</Typography>;
  }

  return (
    <Container sx={{ paddingBottom: 3, paddingTop: 3 }}>
      <BackLink to={backLinkHref}>Back to list</BackLink>
      <Card sx={{ maxWidth: 345, marginTop: 3 }}>
        <CardMedia
          component="img"
          height="200"
          image={horseImage}
          alt="horse"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {animal.name}
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: 2 }}>
            Age: {animal.age}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {animal.description}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "space-around" }}>
          <Button size="small">Vet info</Button>
          <Button size="small" id="exercisesList">
            Exercises
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};
