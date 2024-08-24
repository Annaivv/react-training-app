import { Box, IconButton, Stack, Typography } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Link, useLocation } from "react-router-dom";
import { Item } from "../styledComponents";

interface ItemsListProps<T> {
  itemsKey: string;
  items: T[];
  handleRemoveItem: (id: number) => void;
  onAddButtonClick: () => void;
}

export const ItemsList = <T extends { id: number; name: string }>({
  itemsKey,
  items,
  handleRemoveItem,
  onAddButtonClick,
}: ItemsListProps<T>) => {
  const location = useLocation();

  return (
    <div>
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
                aria-label="remove item"
                onClick={() => handleRemoveItem(item.id)}
              >
                <ClearIcon fontSize="medium" />
              </IconButton>
            </Item>
          ))}
        </Stack>
        <IconButton
          color="primary"
          aria-label="add item"
          sx={{ paddingTop: "24px" }}
          onClick={onAddButtonClick}
        >
          <AddCircleIcon fontSize="large" />
        </IconButton>
      </Box>
    </div>
  );
};
