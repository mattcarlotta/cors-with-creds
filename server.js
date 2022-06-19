const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const PORT = 4000;
const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

// cors
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get("/hello", (req, res) => {
  const { message } = req.cookies;
  res.send(message || "No message was found in the cookie!");
});

app.listen(PORT, () => {
  console.log("listening on port", PORT); // eslint-disable-line no-console
});
