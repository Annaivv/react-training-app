import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { IconButton, Paper, Typography } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

const ItemBox = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  display: "flex",
  justifyContent: "space-between",
  color: theme.palette.text.secondary,
}));

interface ItemProps {
  id: string;
  name: string;
  linkTo: string;
  onRemove: (id: string) => void;
}

export const Item: React.FC<ItemProps> = ({ id, name, linkTo, onRemove }) => {
  const location = useLocation();

  return (
    <ItemBox>
      <Link
        to={linkTo}
        state={{ from: location }}
        style={{ textDecoration: "none", flexGrow: 1 }}
      >
        <Typography color="primary">{name}</Typography>
      </Link>
      <IconButton
        color="error"
        aria-label="remove"
        onClick={() => onRemove(id)}
      >
        <ClearIcon fontSize="medium" />
      </IconButton>
    </ItemBox>
  );
};
