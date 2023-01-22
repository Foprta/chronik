import { IDBPDatabase, openDB } from 'idb';
import { Database } from './types';

export const useIndexedDB = (): Database => {




    const db = ref<IDBPDatabase | undefined>();
    const result = reactive<Database>({ addEntity: () => { db.value?.add("entities", 'jopa', "entity1") } })


    openDB('chronik', 1, {
        upgrade(upgradeDB) {
            upgradeDB.createObjectStore('entities');
        }
    }).then(database => db.value = database)








    return result
}