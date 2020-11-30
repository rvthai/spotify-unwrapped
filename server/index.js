const express = require("express");
const app = express();
const port = process.env.PORT || 9000;

app.get("/express", (req, res) => {
  res.send({
    message: "YOUR EXPRESS BACKEND IS CONNECTED TO YOUR REACT APP!",
  });
});

app.listen(port, () => console.log(`Listening on port ${port}...`));
