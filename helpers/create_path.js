const path = require("path");

const createPath = (page) =>
  path.resolve(__dirname, "../view-ejs", `${page}.ejs`); // что бы ссылаться на ejs файлы

module.exports = createPath;
