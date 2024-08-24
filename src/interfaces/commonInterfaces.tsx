import React from "react";

export interface Item {
  id: number;
  name: string;
  description?: string;
}

export interface FormInput {
  name: string;
  description?: string;
}

export interface AddItemFormProps {
  open: boolean;
  handleCloseForm: () => void;
  handleAddItem: (item: any) => void;
  children?: React.ReactNode;
}
