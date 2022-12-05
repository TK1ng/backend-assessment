const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, updateCompliment, getFortune, addFortune, deleteFortune } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.post("/api/fortune", addFortune);
app.put("/api/delete-fortune/:id", updateCompliment);
app.delete("/api/delete-fortune", deleteFortune);

app.listen(4000, () => console.log("Server running on 4000"));
