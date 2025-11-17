import express from "express";
import multer from "multer";
import parseExcel from "./parseExcel.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(cors());

// Fix for ES modules dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// SERVE FRONTEND
app.use(express.static(path.join(__dirname, "../public")));

const upload = multer({ dest: "uploads/" });

app.post("/upload", upload.single("file"), async (req, res) => {
  const data = await parseExcel(req.file.path);
  res.json(data);
});

// Run server
app.listen(3000, () => console.log("Server running on port 3000"));
