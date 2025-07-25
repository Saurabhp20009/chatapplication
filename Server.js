const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

const cors = require("cors");

app.use(express.static("public"));

app.use(express.json());

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


app.use(cors());
