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
    const { data } = await supabase.from("exercises").select();
    setExercises(data as Exercise[]);
  }

  const handleAddExercise = (newExercise: Exercise) => {
    setExercises((prevExercises) => {
      const updatedExercises = [...prevExercises, newExercise];
      try {
        localStorage.setItem(exercisesKey, JSON.stringify(updatedExercises));
        console.log("Exercises saved to localStorage");
      } catch (e) {
        console.error("Error saving to localStorage", e);
      }
      return updatedExercises;
    });
  };

  const handleRemoveExercise = (id: number) => {
    setExercises((prevExercises) => {
      const updatedExercises = prevExercises.filter(
        (exercise) => exercise.id !== id
      );
      localStorage.setItem(exercisesKey, JSON.stringify(updatedExercises));
      return updatedExercises;
    });
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
