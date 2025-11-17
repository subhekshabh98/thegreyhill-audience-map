import express from "express";
import multer from "multer";
import parseExcel from "./parseExcel.js";
import cors from "cors";

const app = express();
app.use(cors());

const upload = multer({ dest: "uploads/" });

app.post("/upload", upload.single("file"), async (req, res) => {
  const data = await parseExcel(req.file.path);
  res.json(data);
});

app.listen(3000, () => console.log("Server running on port 3000"));
