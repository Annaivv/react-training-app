//import * as React from "react";
import { supabase } from "../supabaseClient";
import { useMutation, useQuery } from "@tanstack/react-query";
import { exercisesKey } from "../constants";
import { useOpen } from "../utils/useOpen";
import { Exercise } from "../interfaces/exerciseInterfaces";
import { ItemsList } from "../Components/ItemsList";
import { AddExerciseForm } from "../Components/AddExerciseForm";
import { checkUser } from "../utils/checkUser";
import { queryClient } from "../utils/http";

export const ExercisesList = () => {
  const { open, setOpen } = useOpen();

  //const queryClient = useQueryClient();

  // const [exercises, setExercises] = React.useState<Exercise[]>([]);

  // React.useEffect(() => {
  //   getExercises();
  // }, []);

  // const getExercises = async () => {
  //   await checkUser(async (user) => {
  //     const { data, error } = await supabase
  //       .from(exercisesKey)
  //       .select("*")
  //       .eq("user_id", user.id);

  //     if (error) console.error("Error fetching exercises ", error);
  //     else setExercises((data as Exercise[]) || []);
  //   });
  // };

  const fetchExercises = async (): Promise<Exercise[]> => {
    const user = await checkUser();
    const { data, error } = await supabase
      .from(exercisesKey)
      .select("*")
      .eq("user_id", user.id);

    if (error) {
      throw new Error(error.message);
    }
    return data as Exercise[];
  };

  const {
    data: exercises,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: [exercisesKey],
    queryFn: fetchExercises,
  });

  const addExerciseMutation = useMutation({
    mutationFn: async (newExercise: Exercise) => {
      const user = await checkUser();

      const { error } = await supabase
        .from(exercisesKey)
        .insert([{ ...newExercise, user_id: user?.id }]);

      if (error) console.error(error);
      else console.log(newExercise);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [exercisesKey] });
    },
  });

  const handleAddExercise = (newExercise: Exercise) => {
    addExerciseMutation.mutate(newExercise);
  };

  const deleteExerciseMutation = useMutation({
    mutationFn: async (exerciseId: string) => {
      const user = await checkUser();
      const { error } = await supabase
        .from("exercises")
        .delete()
        .eq("id", exerciseId)
        .eq("user_id", user?.id);

      if (error) console.error(error);
      else console.log(exerciseId);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [exercisesKey] });
    },
  });

  const handleRemoveExercise = async (exerciseId: string): Promise<void> => {
    deleteExerciseMutation.mutate(exerciseId);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error?.message}</div>;
  }

  return (
    <div>
      <ItemsList<Exercise>
        items={exercises || []}
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
