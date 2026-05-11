const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("public"));

const utenti = [
  {
    cognome: "SALHI",
    nome: "TARIK",
    dataNascita: "1975-07-31",
    matricola: "778581",
    file: "/files/documento.pdf"
  },
  {
    cognome: "SHAKER",
    nome: "ALI",
    dataNascita: "1997-08-07",
    matricola: "523748",
    file: "/files/shaker-ali.pdf"
  },
  {
    cognome: "SHAKER",
    nome: "MOHAMED",
    dataNascita: "1996-06-12",
    matricola: "523749",
    file: "/files/shaker-mohamed.pdf"
  },
  {
    cognome: "MOUSTAFA",
    nome: "TAMER",
    dataNascita: "1981-07-04",
    matricola: "523750",
    file: "/files/moustafa.pdf"
  },
  {
    cognome: "HEGAB",
    nome: "EBRHIM",
    dataNascita: "1993-08-05",
    matricola: "523753",
    file: "/files/hegab.pdf"
  }
];

app.post("/api/verifica", (req, res) => {
  const cognome = (req.body.cognome || "").trim().toUpperCase();
  const nome = (req.body.nome || "").trim().toUpperCase();
  const dataNascita = (req.body.dataNascita || "").trim();
  const matricola = (req.body.matricola || "").trim();

  const utente = utenti.find(u =>
    u.cognome === cognome &&
    u.nome === nome &&
    u.dataNascita === dataNascita &&
    u.matricola === matricola
  );

  if (!utente) {
    return res.status(401).json({
      ok: false,
      message: "Dati non validi."
    });
  }

  res.json({
    ok: true,
    downloadUrl: utente.file
  });
});

app.listen(PORT, () => {
  console.log(`Server attivo sulla porta ${PORT}`);
});
