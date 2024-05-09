/* 
Il nostro server HTTP ora invia un corpo di risposta JSON.

Modifica la posizione nella risposta in "Marte".
Avvia il server e fai una richiesta ad esso con curl utilizzando l'opzione --verbose.
Qual è il valore dell'intestazione di risposta Content-Length?
Dovrebbe esserci uno script singolo che:

- Importa il modulo http di base di Node.js (o utilizza node:http).
- Crea un server HTTP con il metodo http.createServer.
- Imposta l'intestazione di risposta: Content-Type: application/json
- Invia il corpo di risposta JSON: { "location": "Marte" }
- Il valore dell'intestazione di risposta Content-Length è 19.

*/

const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Req Recived");

  res.statusCode = 200;
  res.setHeader( "Content-Type", "application/json");
  res.setHeader( "Content-Length", 19);

  const objJson = JSON.stringify({ location: "Mars" });
  res.end(objJson);
});

const porta = 3000
server.listen(porta, () => {
  console.log(`server is running on http://localhost:${porta}`);
})