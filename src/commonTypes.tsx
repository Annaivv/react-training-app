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
