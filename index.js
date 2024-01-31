const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const http = require("http");

const app = express();
const server = http.createServer(app);
dotenv.config();

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
  optionsSuccessStatus: 200,
};

const port = process.env.NODE_APP_PORT;
const env = process.env.NODE_APP_ENV;

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const AuthRoute = require("./routes/authRoute");

app.use("/auth/api", AuthRoute);

console.log(`Application is running on ${env} environment`);

server.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
