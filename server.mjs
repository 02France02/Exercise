import express from "express";
import "express-async-errors";
import morgan from "morgan";
import joi from "joi"
const app = express();
const port = 3000;

app.use(morgan("dev"));
app.use(express.json());

let planets = [
  { id: 1, name: "Earth" },
  { id: 2, name: "Mars" },
  { id: 3, name: "Moon" },
];

// Invio alla pagina un array di oggetti
app.get("/api/planets", (req, res) => {
  res.status(200).json(planets);
});

// Basandosi sull'id, invia il singolo oggetto alla pagina
app.get("/api/planets/:id", (req, res) => {
  const { id } = req.params;
  const planet = planets.find((p) => p.id === Number(id));
  res.status(200).json(planet);
});

// Creazione di un nuovo pianeta
app.post("/api/planets", (req, res) => {
  const { id, name } = req.body;
  const newPlanet = { id, name };
  planets = [...planets, newPlanet];

  res.status(200).json({ msg: "Il pianeta è stato creato" });
});

// convalida con joy
const updatePlanetSchema = Joi.object({
  name: Joi.string().required(),
});

// Aggiornare un pianeta esistente
app.put("/api/planets/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  planets = planets.map(plan => plan.id === Number(id) ? ({...plan, name}) : plan )  
  res.status(200).json({ msg: "the planet was updated" });
});

// Cancellare un pianeta
app.delete("/api/planets/:id", (req, res) => {
  const { id } = req.params;
  planets = planets.filter(plan => plan.id !== Number(id) )  
  res.status(200).json({ msg: "the planet was deleted" });
});

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});

// Utilizzando Postman con un GET, possiamo ottenere i dati degli array creati
