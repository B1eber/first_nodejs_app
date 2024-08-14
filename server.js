const express = require("express");
const nodemon = require("nodemon");
const morgan = require("morgan"); 
const mongoose = require("mongoose");
const method_override = require("method-override");
const ejs = require("ejs"); // вставка шаблонизатора
const post_router = require("./routes/post_routes");
const contacts_router = require("./routes/contacts_routes");
const createPath = require("./helpers/create_path");
const postApiRoutes = require("./routes/api_post_routes");



const app = express();
app.set("view engine", "ejs");

const PORT = 3000;

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`);
});

const mongoURI = "mongodb://localhost:27017/web_ass3";

mongoose.connect(mongoURI);

const db = mongoose.connection;

db.on("error", console.error.bind(console,"Ошибка подключения к MongoDB:"));
db.once("open", () => {
  console.log("  __Успешное подключение к MongoDB /___хехехе ___/");
});

app.use(
  morgan(":method :url :status :res[content-lenght] - :response-time ms")
);

app.use(express.urlencoded({ extended: false }));
  
app.use(express.static("style"));

app.use(method_override("_method"));

app.get("/", (req, res) => {
  const title = "Home";
  res.render(createPath("index"), { title });
});

app.use(post_router);
app.use(contacts_router);
app.use(postApiRoutes);

app.use((req, res) => {
  const title = "Error";
  res.status(404).render(createPath("Error"), { title });
});
