import express from "express";
import multer from "multer";
import parseExcel from "./parseExcel.js";

const app = express();
const upload = multer({ dest: "uploads/" });

app.post("/upload", upload.single("file"), (req, res) => {
  const data = parseExcel(req.file.path);
  res.json(data);
});

app.listen(3000, () => console.log("Server running on port 3000"));


