const express = require("express");
const app = express();

app.get("/", (request, response) => {
  console.log("Ping received!");
  response.sendStatus(200);
});

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});