import * as React from "react";
import { supabase } from "../supabaseClient";

import { useOpen } from "../utils/useOpen";
import { Exercise } from "../interfaces/exerciseInterfaces";
import { ItemsList } from "../Components/ItemsList";
import { AddExerciseForm } from "../Components/AddExerciseForm";

export const exercisesKey = "exercises";

export const ExercisesList = () => {
  const { open, setOpen } = useOpen();

  const [exercises, setExercises] = React.useState<Exercise[]>([]);

  React.useEffect(() => {
    getExercises();
  }, []);

  async function getExercises() {
    const { data } = await supabase.from(exercisesKey).select();
    setExercises(data as Exercise[]);
  }

  const handleAddExercise = async (newExercise: Exercise): Promise<void> => {
    const { data, error } = await supabase
      .from(exercisesKey)
      .insert(newExercise)
      .select();

    if (error) {
      console.log(error);
      return;
    }
    setExercises((prevExercises) => [
      ...prevExercises,
      ...(data as Exercise[]),
    ]);
  };

  const handleRemoveExercise = async (id: string): Promise<void> => {
    try {
      // Attempt to delete the exercise from Supabase
      const { data, error } = await supabase
        .from(exercisesKey)
        .delete()
        .eq("id", id)
        .select();

      // Log the response data and error
      console.log("Data:", data);
      console.log("Error:", error);

      // Check if there was an error during deletion
      if (error) {
        console.error("Error deleting exercise:", error.message);
        return;
      }

      // If deletion was successful, update local state
      setExercises((prevExercises) => {
        const updatedExercises = prevExercises.filter(
          (exercise) => exercise.id !== id
        );
        console.log("Updated Exercises:", updatedExercises);
        return updatedExercises;
      });
    } catch (err) {
      // Catch any unexpected errors
      console.error("Unexpected error:", err);
    }
  };

  return (
    <div>
      <ItemsList<Exercise>
        items={exercises}
        itemsKey={exercisesKey}
        handleRemoveItem={handleRemoveExercise}
        onAddButtonClick={() => setOpen(true)}
      />
      {open ? (
        <AddExerciseForm
          open={open}
          handleCloseForm={() => setOpen(false)}
          handleAddExercise={handleAddExercise}
        />
      ) : null}
    </div>
  );
};
