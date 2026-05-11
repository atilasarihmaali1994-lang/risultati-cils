# Sito download documento

## Avvio locale

```bash
npm install
npm start
```

Apri:

```text
http://localhost:3000
```

## Pubblicazione su Render

1. Crea un account su Render.com.
2. Crea un nuovo Web Service.
3. Carica questo progetto su GitHub.
4. Imposta:
   - Build Command: `npm install`
   - Start Command: `npm start`
5. Render genererà un link pubblico da inviare.

Il PDF è in:

```text
public/files/documento.pdf
```
