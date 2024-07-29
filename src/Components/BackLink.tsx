import React from "react";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

interface BackLinkProps {
  to: React.HTMLAttributeAnchorTarget;
  children: React.ReactNode;
}

export const BackLink: React.FC<BackLinkProps> = ({ to, children }) => {
  return (
    <Button
      variant="outlined"
      startIcon={<ArrowBackIcon />}
      component={Link}
      to={to}
    >
      {children}
    </Button>
  );
};
