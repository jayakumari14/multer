const express = require("express");
const path = require("path");
const upload = require("./config/multer-config");
const userModel = require("./models/user");
const cors = require("cors");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/test", (req, res) => {
  res.render("test");
});

app.get("/profile", async (req, res) => {
  res.render("profile");
});

app.get("/profile/upload", (req, res) => {
  res.render("test");
});

app.post("/upload", upload.single("image"), async (req, res) => {
  await user.save();
  res.redirect("/profile");
});

const port = 3000;

app.listen(port, () => {
  console.log(`listening to port ${port}...`);
});
