const express = require("express");
const bodyParder = require("body-parser");
const cors = require("cors");
const path = require("path");
const PORT = process.env.PORT || 5000;
const db = require("./db/mongoose");
const app = express();
const ApiRouter = require("./routes/Api");

app.use(cors());
app.use(bodyParder.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParder.json());
app.use("/", express.static(path.join(__dirname, "public")));

app.use("/api", ApiRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
