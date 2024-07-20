import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

export const BackLink = ({ to, children }) => {
  return (
    <Link to={to}>
      <Button variant="outlined" startIcon={<ArrowBackIcon />}>
        {children}
      </Button>
    </Link>
  );
};
