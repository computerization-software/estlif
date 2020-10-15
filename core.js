const runtimeConfig = {
  dependencies: {},
};

const createEstlifEngine = (facade) => {
  runtimeConfig.dependencies = facade.dependencies;

  return parseFromFile;
};

const parseFromFile = (filename, data) =>
  Function(
    generateVariableDefinitionStatement(data) +
      generateReturnStatement(filename)
  )();

const generateVariableDefinitionStatement = (data) => {
  return Object.keys(data).reduce((result, key) => {
    const variableValue = JSON.stringify(data[key]);

    return `${result} const ${key} = ${variableValue};`;
  }, "");
};

const generateReturnStatement = (filename) =>
  `return \` ${readTemplate(filename)}\`;`;

const readTemplate = (templatePath) =>
  runtimeConfig.dependencies.fs.readFileSync(templatePath, "utf-8");

module.exports = {
  runtimeConfig,

  createEstlifEngine,
  parseFromFile,
  generateVariableDefinitionStatement,
  generateReturnStatement,
  readTemplate,
};
