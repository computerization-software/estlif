import { readFileSync } from "fs";
import { createEstlifEngine } from "./core";
import { TRuntimeConfig } from "./types";

export default createEstlifEngine({
  dependencies: { readFileSync },
} as TRuntimeConfig);
