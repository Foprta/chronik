
import { invoke } from '@tauri-apps/api/tauri'
import { Database } from './types';

export const useSQLLite = (): Database => {


    return { addEntity: () => invoke("greet", { name: "Jeka" }).then(console.log) };
}