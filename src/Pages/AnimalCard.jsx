import { useParams, useLocation } from "react-router-dom";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import horseImage from "../assets/horse.jpg";
import { getAnimalById } from "../fakeAPI";
import { BackLink } from "../Components/BackLink";

export const AnimalCard = () => {
  const { id } = useParams();
  const animal = getAnimalById(id);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/animals";

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
              Horses have oval-shaped hooves, long tails, short hair, long
              slender legs, muscular and deep torso build, long thick necks, and
              large elongated heads. The mane is a region of coarse hairs, which
              extends along the dorsal side of the neck in both domestic and
              wild species.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
};
