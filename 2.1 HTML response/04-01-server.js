/* Il nostro server HTTP invia un corpo di risposta HTML. Sostituisci il testo nell'HTML con 
il tuo messaggio personalizzato. Avvia il server e utilizza il tuo browser web per testare le modifiche.

-Importa il modulo http di base di Node.js (oppure usa node:http).
-Crea un server HTTP con il metodo http.createServer.
-Imposta il codice di stato della risposta su 200.
-Imposta l'intestazione della risposta: Content-Type: text/html.
-Invia un corpo di risposta HTML contenente il tuo messaggio.
-Fai in modo che il server ascolti sulla porta 3000. */

const http = require("http");

const server = http.createServer((req, res) => {
  console.log("req recived");
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>This page is from Node.js</h1>");
});

const port = 3000;
server.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
