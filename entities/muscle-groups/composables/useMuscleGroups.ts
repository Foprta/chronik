import { inject, ref } from "#imports";
import { IMuscleGroup } from "~~/models/exercises";
import { DATABASE_INJECTOR } from "~~/shared";
import { ChronikDatabase } from "~~/shared/database";

const muscleGroups = ref<IMuscleGroup[]>([]);

export const useMuscleGroups = () => {
  const db = inject<ChronikDatabase | undefined>(DATABASE_INJECTOR, undefined);

  const loadMuscles = () => {
    if (!db) throw new Error("Database not injected");

    return db.muscleGroups.toArray().then((data) => {
      muscleGroups.value = data;
    });
  };

  const addMuscleGroup = (name: string) => {
    if (!db) throw new Error("Database not injected");

    db.muscleGroups
      .add({
        id: crypto.randomUUID(),
        name,
        color: "FFFFFF",
      })
      .then(() => loadMuscles());
  };

  return { muscleGroups, loadMuscles, addMuscleGroup };
};
