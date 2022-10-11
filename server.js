const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
const PORT = process.env.PORT | 8000;

app.get("/test", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});
