type TRuntimeDependencies = {
  readFileSync?: (filename: string, encoding: string) => string;
};

export type TRuntimeConfig = {
  dependencies: TRuntimeDependencies;
};
