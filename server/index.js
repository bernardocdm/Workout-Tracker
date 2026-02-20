require("dotenv").config({ path:"./src/.env"});

const app = require("./app");
const pool = require("./src/database");

const PORT = process.env.PORT || 3333;

async function startServer() {
  try {
    await pool.connect();
    console.log("Database connected");

    app.listen(PORT, () => {
      console.log(`Server started at port ${PORT}`);
    });

  } catch (error) {
    console.error("Error connecting to database:", error);
    process.exit(1);
  }
}

startServer();
