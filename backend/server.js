const app = require("./index");
const dotenv = require("dotenv");
const connect = require("./src/config/db");

//config
dotenv.config({ path: "backend/.env" });

//connect to database
connect();

app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});
