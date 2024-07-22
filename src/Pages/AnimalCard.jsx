import * as React from "react";
import { useParams, useLocation } from "react-router-dom";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import { CardActionArea } from "@mui/material";
import horseImage from "../assets/horse.jpg";
import { BackLink } from "../Components/BackLink";

export const AnimalCard = () => {
  const { id } = useParams();
  const [animal, setAnimal] = React.useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/animals";

  React.useEffect(() => {
    const savedAnimals = JSON.parse(localStorage.getItem("animals"));
    const foundAnimal = savedAnimals?.find((animal) => animal.id === id);
    setAnimal(foundAnimal);
  }, [id]);

  if (!animal) {
    return <div>Loading...</div>;
  }

  return (
    <Container sx={{ paddingBottom: 3, paddingTop: 3 }}>
      <BackLink to={backLinkHref}>Back to list</BackLink>
      <Card sx={{ maxWidth: 345, marginTop: 3 }}>
        <CardActionArea>
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
            <CardActions
              sx={{ display: "flex", justifyContent: "space-around" }}
            >
              <Button size="small">Vet info</Button>
              <Button size="small" id="exercisesList">
                Exercises
              </Button>
            </CardActions>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
};
