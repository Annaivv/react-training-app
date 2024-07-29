import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { MenuItem, MenuItemProps } from "@mui/material";

interface MenuItemLinkProps extends MenuItemProps {
  to: string;
  children: React.ReactNode;
}

export const MenuItemLink: React.FC<MenuItemLinkProps> = ({
  to,
  children,
  ...other
}) => {
  return (
    <MenuItem component={RouterLink} to={to} {...other}>
      {children}
    </MenuItem>
  );
};
