const express = require("express");
const app = express();

app.use(express.json())

require("./app/routes/user.routes.js")(app);
app.listen(3020, () => {
  console.log("Server is running on port 3020.");
});