const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("public"));

const utenti = [
  {
    matricola: "778581",
    dataNascita: "1975-07-31",
    file: "/files/documento.pdf"
  },
  {
    matricola: "523748",
    dataNascita: "1997-08-07",
    file: "/files/shaker-ali.pdf"
  },
  {
    matricola: "523749",
    dataNascita: "1996-06-12",
    file: "/files/shaker-mohamed.pdf"
  },
  {
    matricola: "523750",
    dataNascita: "1981-07-04",
    file: "/files/moustafa.pdf"
  },
  {
    matricola: "523753",
    dataNascita: "1993-08-05",
    file: "/files/hegab.pdf"
  }
];

app.post("/api/verifica", (req, res) => {
  const matricola = (req.body.matricola || "").trim();
  const dataNascita = (req.body.dataNascita || "").trim();

  const utente = utenti.find(u =>
    u.matricola === matricola &&
    u.dataNascita === dataNascita
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
  console.log("Server avviato sulla porta " + PORT);
});
