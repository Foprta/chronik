import { Database } from "./types";
import { useIndexedDB } from "./useIndexedDB";
import { useSQLLite } from "./useSQLLite";

export const useDatabase = () => {
    const { public: { inTauri } } = useRuntimeConfig();

    const db = ref<Database | undefined>();

    watchEffect(() => {
        if (process.server) {
            db.value = undefined;
        } else if (inTauri) {
            db.value = useSQLLite();
        } else {
            db.value = useIndexedDB();
        }
    })


    return db;
}