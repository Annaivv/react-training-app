import { Item } from "./commonInterfaces";
import { AddItemFormProps } from "./commonInterfaces";

export interface Exercise extends Item {
  image?: string;
  audio_file?: string;
}

export interface AddExerciseFormProps
  extends Omit<AddItemFormProps, "handleAddItem" | "children"> {
  handleAddExercise: (newExercise: Exercise) => void;
}
