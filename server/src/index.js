const path = require("path");
const fs = require("fs");
const express = require("express");
const cors = require("cors");
const { cvData } = require("./data/cvData");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", message: "CV API running smoothly" });
});

app.get("/api/cv", (_req, res) => {
  res.json(cvData);
});

app.get("/api/projects/:id", (req, res) => {
  const project = cvData.projects.find((item) => item.id === req.params.id);
  if (!project) {
    return res.status(404).json({ message: "Proyecto no encontrado" });
  }
  res.json(project);
});

const clientDistPath = path.resolve(__dirname, "../../client/dist");
if (fs.existsSync(clientDistPath)) {
  app.use(express.static(clientDistPath));

  app.get("*", (_req, res) => {
    res.sendFile(path.join(clientDistPath, "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
