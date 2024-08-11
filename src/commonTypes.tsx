import React from "react";

export interface FormValues {
  name: string;
  description?: string;
}

export interface AddItemFormProps {
  open: boolean;
  children: React.ReactNode;
  handleCloseForm: () => void;
  handleAddItem: (newItem: { id: string } & FormValues) => void;
}

// export interface AddItemFormProps<T> {
//   open: boolean;
//   handleCloseForm: () => void;
//   handleAddItem: (item: T) => void;
//   children?: React.ReactNode;
// }
