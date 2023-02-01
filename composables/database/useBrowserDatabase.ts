import { IDBPDatabase, openDB } from "idb";
import { IExercisesDBScheme } from "~~/models/exercises";
import { reactive, ref } from "#imports";
import { Database } from "~~/shared/types";

export const useBrowserDatabase = (): Database => {
  const db = ref<IDBPDatabase<IExercisesDBScheme> | undefined>();

  openDB<IExercisesDBScheme>("chronik", 1, {
    upgrade(upgradeDB, oldVersion) {
      if (oldVersion == 0) {
        upgradeDB.createObjectStore("exercises", {
          keyPath: "id",
        });

        upgradeDB.createObjectStore("muscleGroups", {
          keyPath: "id",
        });

        upgradeDB.createObjectStore("oneValueSets", {
          keyPath: "id",
        });
      }
    },
  }).then((database) => (db.value = database));

  return reactive<Database>({
    addEntity(storeName, entity) {
      if (!db.value) {
        return Promise.reject(new Error("Database not initialised"));
      }

      const store = db.value
        .transaction(storeName, "readwrite")
        .objectStore(storeName);

      return store.add(entity);
    },

    getEntites(storeName) {
      if (!db.value) {
        return Promise.reject(new Error("Database not initialised"));
      }

      const store = db.value
        .transaction(storeName, "readonly")
        .objectStore(storeName);

      return store.getAll();
    },
  });
};
