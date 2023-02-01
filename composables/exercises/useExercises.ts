import { inject, ref } from "#imports";
import { EExerciseMeasure, IExercise, IMuscleGroup } from "~~/models/exercises";
import { DATABASE_INJECTOR } from "~~/shared";
import { ChronikDatabase } from "~~/shared/database";

export const useExercises = () => {
  const db = inject<ChronikDatabase>(DATABASE_INJECTOR);

  const exercises = ref<IExercise[]>([]);

  const loadExercises = () => {
    if (!db) throw new Error("Database not injected");

    return db.exercises.toArray();
  };

  const addExercise = (
    name: string,
    measure: EExerciseMeasure,
    muscleGroupID?: IMuscleGroup["id"]
  ) => {
    if (!db) throw new Error("Database not injected");

    db.exercises
      .add({
        id: crypto.randomUUID(),
        name,
        measure,
        muscleGroupID,
      })
      .then(() => loadExercises());
  };

  return { exercises, loadExercises, addExercise };
};
