const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.post("/api/verifica", (req, res) => {
  const { cognome, nome, dataNascita, codice } = req.body;

  if (!cognome || !nome || !dataNascita || !codice) {
    return res.status(400).json({ ok: false, message: "Compila tutti i campi." });
  }

  const logPath = path.join(__dirname, "accessi.json");
  let accessi = [];
  if (fs.existsSync(logPath)) {
    accessi = JSON.parse(fs.readFileSync(logPath, "utf8"));
  }

  accessi.push({
    cognome,
    nome,
    dataNascita,
    codice,
    data: new Date().toISOString()
  });

  fs.writeFileSync(logPath, JSON.stringify(accessi, null, 2));

  res.json({ ok: true, downloadUrl: "/files/documento.pdf" });
});

app.listen(PORT, () => {
  console.log("Sito avviato: http://localhost:" + PORT);
});
