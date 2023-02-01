interface IDBStore<T> {
  key: string;
  value: T;
}

export interface IExercisesDBScheme {
  exercises: IDBStore<IExercise>;
  muscleGroups: IDBStore<IMuscleGroup>;
  sets: IDBStore<ISet>;
}

export interface IExercise {
  /**
   * Unique UUID-V4
   */
  id: string;

  /**
   * Exercise name
   */
  name: string;

  /**
   * Exercise measure
   */
  measure: EExerciseMeasure;

  /**
   * Muscle group ID foreign key
   *
   * Usable for generating muscle groups related sessions
   */
  muscleGroupID?: string;
}

export interface ISet {
  /**
   * Set ID
   */
  id: string;

  /**
   * Exercise ID foreign key
   */
  exerciseId: string;

  /**
   * Set value 1
   */
  value1: number;

  /**
   * Set value 2
   */
  value2?: number;
}

export interface IMuscleGroup {
  /**
   * Unique UUID-V4
   */
  id: string;

  /**
   * Muscle group name
   */
  name: string;

  /**
   * HEX Color
   *
   * Example: FFFFFF
   */
  color: string;
}

/**
 * Exercise set measure
 *
 * Must be synced with Backend Enum
 */
export enum EExerciseMeasure {
  /**
   * Exercises with repetitions only
   *
   * Example: `Pull-Ups`
   */
  Reps,

  /**
   * Exercises with weighted repetitions
   *
   * Example: `Weighted Pull-Ups`
   */
  RepsWithWeight,

  /**
   * One repetiton with weight
   *
   * Example: `Snatch`
   */
  Weight,
}
