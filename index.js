const express = require("express");
const bodyParser = require("body-parser");
const { dbConnection } = require("./src/config/db.config");
const smtpCollectionRoutes = require("./src/Smtp/smtp");
const CustomerMailCollectionRoutes = require("./src/CustomerEmail/CustomerEmail");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use("/api", smtpCollectionRoutes);
app.use("/api", CustomerMailCollectionRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await dbConnection();
});
