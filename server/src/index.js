const path = require("path");
const fs = require("fs");
const express = require("express");
const cors = require("cors");
const { cvData } = require("./data/cvData");

const CV_STORAGE_DIR = path.resolve(__dirname, "../public/cv");
const CV_FILES = {
  es: { fileName: "CV_DSGESP.pdf", downloadName: "DanielSoria-CV-ES.pdf" },
  en: { fileName: "CV_DSGENG.pdf", downloadName: "DanielSoria-CV-EN.pdf" }
};

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
  const profiles = Object.values(cvData.languages || {});
  const project = profiles
    .flatMap((profile) => Array.isArray(profile.projects) ? profile.projects : [])
    .find((item) => item.id === req.params.id);

  if (!project) {
    return res.status(404).json({ message: "Proyecto no encontrado" });
  }
  res.json(project);
});

app.get("/api/cv/files/:lang", (req, res) => {
  const lang = req.params.lang.toLowerCase();
  const fileMeta = CV_FILES[lang];

  if (!fileMeta) {
    return res.status(404).json({ message: "Archivo de CV no encontrado" });
  }

  const filePath = path.join(CV_STORAGE_DIR, fileMeta.fileName);

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ message: "Archivo de CV no disponible en el servidor" });
  }

  res.download(filePath, fileMeta.downloadName, (err) => {
    if (err) {
      console.error(`No se pudo entregar el CV (${lang}):`, err.message);
      if (!res.headersSent) {
        res.status(500).json({ message: "No pudimos descargar el CV en este momento." });
      }
    }
  });
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
