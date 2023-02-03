const express = require("express");
const users = require("./routes/api/users");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", users);

app.listen(8080, () => {
  console.log("server started on port 8080");
});
