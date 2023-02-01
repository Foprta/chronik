import { IExercisesDBScheme } from "~~/models/exercises";

export interface Database {
  addEntity<T extends keyof IExercisesDBScheme>(
    storeName: T,
    entity: IExercisesDBScheme[T]["value"]
  ): Promise<IDBValidKey>;

  getEntites<T extends keyof IExercisesDBScheme>(
    storeName: T
  ): Promise<Array<IExercisesDBScheme[T]["value"]>>;
}
