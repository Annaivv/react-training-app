import * as React from "react";
import { Box, IconButton, Stack } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
//import { Item } from "./ListItem";
//import { AddNewAnimalForm } from "./AddAnimalForm";

interface CommonItem {
  id: string;
  name: string;
  description?: string;
}

interface ListProps<T extends CommonItem> {
  items: T[];
  onAdd: (item: T) => void;
  onRemove: (id: string) => void;
  renderItem: (item: T, onRemove: (id: string) => void) => React.ReactNode;
}

export const List = <T extends CommonItem>({
  items,
  //   onAdd,
  onRemove,
  renderItem,
}: ListProps<T>) => {
  //
  return (
    <div>
      <Box sx={{ width: "100%", padding: "24px", textAlign: "center" }}>
        <Stack spacing={2}>
          {items.map((item) => (
            <React.Fragment key={item.id}>
              {renderItem(item, onRemove)}
            </React.Fragment>
          ))}
        </Stack>
        <IconButton
          color="primary"
          aria-label="add animal"
          sx={{ paddingTop: "24px" }}
          onClick={() => console.log("Clicked adding")}
        >
          <AddCircleIcon fontSize="large" />
        </IconButton>
      </Box>

      {/* {open && (
        <AddNewAnimalForm
          open={open}
          handleCloseForm={handleCloseForm}
          handleAddAnimal={(newItem: T) => onAdd(newItem)}
        />
      )} */}
    </div>
  );
};
