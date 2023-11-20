const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

const port = process.env.NODE_APP_PORT;
const env = process.env.NODE_APP_ENV;

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log(`Application is running on ${env} environment`);

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
