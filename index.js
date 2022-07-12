let express = require("express");

let app = express();
let port = 3001;

app.use(express.json());

app.get("/", (req, res) => {
  res.send({ message: "Welcome" });
});

app.listen(process.env.PORT || port);
