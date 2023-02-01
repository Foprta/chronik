import Dexie from "dexie";
import { IExercise, IMuscleGroup, ISet } from "~~/models/exercises";

export class ChronikDatabase extends Dexie {
  exercises!: Dexie.Table<IExercise, "id">;
  muscleGroups!: Dexie.Table<IMuscleGroup, "id">;
  sets!: Dexie.Table<ISet, "id">;

  constructor() {
    super("chronik");

    this.version(1).stores({
      exercises: "id",
      muscleGroups: "id",
      sets: "id",
    });
  }
}
