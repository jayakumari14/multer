const express = require("express");
const path = require("path");
const upload = require("./config/multer-config");

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./public/images/uploads");
//   },
//   filename: function (req, file, cb) {
//     crypto.randomBytes(12, (err, bytes) => {
//       const fn = bytes.toString("hex") + path.extname(file.originalname);
//       cb(null, fn);
//     });
//   },
// });

// const upload = multer({ storage: storage });

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/test", (req, res) => {
  res.render("test");
});

app.get("/profile", (req, res) => {
  res.render("profile");
});

app.get("/profile/uploads", (req, res) => {
  res.render("test");
});

// app.post("/uploads", (req, res) => {
//   res.render("test");
// });

app.post("/upload", upload.single("image"), (req, res) => {
  console.log(req.file);
});

const port = 3000;

app.listen(port, () => {
  console.log(`listening to port ${port}...`);
});
