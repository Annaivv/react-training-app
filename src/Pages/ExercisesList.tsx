import * as React from "react";
import { supabase } from "../supabaseClient";
import { exercisesKey } from "../constants";
import { useOpen } from "../utils/useOpen";
import { Exercise } from "../interfaces/exerciseInterfaces";
import { ItemsList } from "../Components/ItemsList";
import { AddExerciseForm } from "../Components/AddExerciseForm";
import { checkUser } from "../utils/checkUser";

export const ExercisesList = () => {
  const { open, setOpen } = useOpen();

  const [exercises, setExercises] = React.useState<Exercise[]>([]);

  React.useEffect(() => {
    getExercises();
  }, []);

  const getExercises = async () => {
    await checkUser(async (user) => {
      const { data, error } = await supabase
        .from(exercisesKey)
        .select("*")
        .eq("user_id", user.id);

      if (error) console.error("Error fetching exercises ", error);
      else setExercises((data as Exercise[]) || []);
    });
  };

  const handleAddExercise = async (newExercise: Exercise): Promise<void> => {
    await checkUser(async (user) => {
      const { error } = await supabase
        .from(exercisesKey)
        .insert([{ ...newExercise, user_id: user?.id }]);

      if (error) console.error(error);
      else getExercises();
    });
  };

  const handleRemoveExercise = async (exerciseId: string): Promise<void> => {
    await checkUser(async (user) => {
      const { error } = await supabase
        .from("exercises")
        .delete()
        .eq("id", exerciseId)
        .eq("user_id", user?.id);

      if (error) console.error(error);
      else getExercises();
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
