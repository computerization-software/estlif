import { TRuntimeConfig } from "./types";

export const runtimeConfig: TRuntimeConfig = {
  dependencies: {},
};

export const createEstlifEngine = (facade: TRuntimeConfig) => {
  runtimeConfig.dependencies = facade.dependencies;

  return parseFromFile;
};

export const parseFromFile = (filename: string, data) =>
  Function(
    generateVariableDefinitionStatement(data) +
      generateReturnStatement(filename)
  )();

export const generateVariableDefinitionStatement = (data) => {
  return Object.keys(data).reduce((result, key) => {
    const variableValue = JSON.stringify(data[key]);

    return `${result} const ${key} = ${variableValue};`;
  }, "");
};

export const generateReturnStatement = (filename: string) =>
  `return \` ${readTemplate(filename)}\`;`;

export const readTemplate = (templatePath: string) =>
  runtimeConfig.dependencies.readFileSync(templatePath, "utf-8");
