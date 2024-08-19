const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const router = express.Router();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(router);

const dbRepo = require("./db.repository");

//get
router.route("").get(async (req, res) => {
  dbRepo.getInfo().then((result) => {
    res.status(200).send(result);
  });
});

app.listen(port, () => {
  console.log(`Backend is running at http://localhost:${port}`);
});
