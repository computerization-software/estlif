const fs = require("fs");
const { createEstlifEngine } = require("./core");

module.exports = createEstlifEngine({
  dependencies: { fs },
});
