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
    console.log(data);
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
