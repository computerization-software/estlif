const estlif = require("../index");

const renderedTemplate = estlif("./template.estlif.html", {
  message: "hello world!",
  timestamp: Date.now(),
});

console.log("rendered template:\n", renderedTemplate);
