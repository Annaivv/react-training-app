import * as React from "react";
import { getExercises } from "../fakeAPI-exercises";
import { useOpen } from "../utils/useOpen";
import { Exercise } from "../commonTypes";
import { ItemsList } from "../Components/ItemsList";
import { AddNewExerciseForm } from "../Components/AddExerciseForm";

export const ExercisesList = () => {
  const { open, setOpen } = useOpen();

  const [exercises, setExercises] = React.useState<Exercise[]>(() => {
    const savedExercises = localStorage.getItem("exercises");
    return savedExercises ? JSON.parse(savedExercises) : getExercises();
  });

  const handleAddExercise = (newExercise: Exercise) => {
    setExercises((prevExercises) => {
      const updatedExercises = [...prevExercises, newExercise];
      try {
        localStorage.setItem("exercises", JSON.stringify(updatedExercises));
        console.log("Exercises saved to localStorage");
      } catch (e) {
        console.error("Error saving to localStorage", e);
      }
      return updatedExercises;
    });
  };

  const handleRemoveExercise = (id: string) => {
    setExercises((prevExercises) => {
      const updatedExercises = prevExercises.filter(
        (exercise) => exercise.id !== id
      );
      localStorage.setItem("exrecises", JSON.stringify(updatedExercises));
      return updatedExercises;
    });
  };

  return (
    <div>
      <ItemsList<Exercise>
        items={exercises}
        itemsKey="exercises"
        handleRemoveItem={handleRemoveExercise}
        onAddButtonClick={() => setOpen(true)}
      />
      {open ? (
        <AddNewExerciseForm
          open={open}
          handleCloseForm={() => setOpen(false)}
          handleAddExercise={handleAddExercise}
        />
      ) : null}
    </div>
  );
};
