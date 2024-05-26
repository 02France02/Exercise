import express from "express";
import "express-async-errors";
import morgan from "morgan";
import {
  getAll,
  getOne,
  create,
  updatebyId,
  deleteById,
} from "../src/controllers/planets";

const app = express();
const port = 3000;

app.use(morgan("dev"));
app.use(express.json());

// Invio alla pag un array di oggetti
app.get("/api/planets", getAll);

// Basandomi sull'id, invio il singolo oggetto alla pag
app.get("/api/planets/:id", getOne);

// Creare un nuovo pianeta
app.post("/api/planets", create);

// Aggiornare un pianeta esistente
app.put("/api/planets/:id", updatebyId);

// Cancellare un pianeta
app.delete("/api/planets/:id", deleteById);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});

// Facendo un GET su PostMan,  riusciamo ad ottenere i dati degli array creati
