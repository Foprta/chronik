import type { InjectionKey } from "vue";
import { ChronikDatabase } from "./database";

export const DATABASE_INJECTOR = Symbol(
  "ChronikDatabase"
) as InjectionKey<ChronikDatabase>;
