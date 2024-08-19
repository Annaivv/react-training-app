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
    const initialExercises = getExercises();
    const allExercises = savedExercises
      ? [...initialExercises, ...JSON.parse(savedExercises)]
      : initialExercises;
    console.log("Loaded exercises:", allExercises);
    return allExercises;
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

  return (
    <div>
      <ItemsList<Exercise>
        items={exercises}
        itemsKey="exercises"
        setItems={setExercises}
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
