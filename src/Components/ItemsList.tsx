import * as React from "react";
import { styled } from "@mui/material/styles";
import { Box, IconButton, Paper, Stack, Typography } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Link, useLocation } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  display: "flex",
  justifyContent: "space-between",
  color: theme.palette.text.secondary,
}));

interface ItemsListProps<T> {
  itemsKey: string;
  getItems: () => T[];
  AddItemForm: React.ComponentType<{
    open: boolean;
    handleCloseForm: () => void;
    handleAddItem: (item: T) => void;
  }>;
}

export const ItemsList = <T extends { id: string; name: string }>({
  itemsKey,
  getItems,
  AddItemForm,
}: ItemsListProps<T>) => {
  const location = useLocation();

  const [items, setItems] = React.useState<T[]>(() => {
    const savedItems = localStorage.getItem(itemsKey);
    return savedItems ? JSON.parse(savedItems) : getItems();
  });

  const [open, setOpen] = React.useState(false);

  const handleOpenForm = () => setOpen(true);

  const handleCloseForm = () => setOpen(false);

  const handleAddItem = (newItem: T) => {
    setItems((prevItems) => {
      const updatedItems = [...prevItems, newItem];
      localStorage.setItem(itemsKey, JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const handleRemoveItem = (id: string) => {
    setItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.id !== id);
      localStorage.setItem(itemsKey, JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  return (
    <>
      <Box sx={{ width: "100%", padding: "24px", textAlign: "center" }}>
        <Stack spacing={2}>
          {items.map((item) => (
            <Item key={item.id}>
              <Link
                to={`/${itemsKey}/${item.id}`}
                state={{ from: location }}
                style={{ textDecoration: "none", flexGrow: 1 }}
              >
                <Typography color="primary">{item.name}</Typography>
              </Link>
              <IconButton
                color="error"
                aria-label="remove animal"
                onClick={() => handleRemoveItem(item.id)}
              >
                <ClearIcon fontSize="medium" />
              </IconButton>
            </Item>
          ))}
        </Stack>
        <IconButton
          color="primary"
          aria-label="add animal"
          sx={{ paddingTop: "24px" }}
          onClick={handleOpenForm}
        >
          <AddCircleIcon fontSize="large" />
        </IconButton>
      </Box>

      {open && (
        <AddItemForm
          open={open}
          handleCloseForm={handleCloseForm}
          handleAddItem={handleAddItem}
        />
      )}
    </>
  );
};
