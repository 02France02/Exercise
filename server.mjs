import express from "express";
import Joi from "joi";
import pgPromise from "pg-promise";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const db = pgPromise()("postgres://postgres:123456789@localhost:5432/planets");
const port = process.env.PORT || 3000;
console.log(db);
app.use(express.json());

const setupDb = async () => {
  await db.none(`
    DROP TABLE IF EXISTS planets;

    CREATE TABLE planets (
      id SERIAL NOT NULL PRIMARY KEY,
      name TEXT NOT NULL
    );
  `);

  await db.none(`INSERT INTO planets (name) VALUES ('Earth')`);
  await db.none(`INSERT INTO planets (name) VALUES ('Mars')`);
};
setupDb();

app.get("/planets", async (req, res) => {
  try {
    const planets = await db.any(`SELECT * FROM planets`);
    console.log(planets);
    res.status(200).json(planets);
  } catch (error) {
    res.status(500).json({ error: 'Errore nel recuperare i pianeti' });
  }
});

app.get("/planets/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const planet = await db.oneOrNone(
      `SELECT * FROM planets WHERE id=$1`, 
      [Number(id)]
    );
    if (planet) {
      res.status(200).json(planet);
    } else {
      res.status(404).json({ error: 'Pianeta non trovato' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Errore nel recuperare il pianeta' });
  }
});

const planetSchema = Joi.object({
  name: Joi.string().required(),
});

app.post("/planets", async (req, res) => {
  const newPlanet = { name: req.body.name };
  const { error } = planetSchema.validate(newPlanet);

  if (error) {
    return res.status(400).json({ error: 'Errore nei dati del pianeta' });
  }

  try {
    await db.none(`INSERT INTO planets (name) VALUES ($1)`, [newPlanet.name]);
    res.status(201).json({ msg: 'Il pianeta è stato creato' });
  } catch (error) {
    res.status(500).json({ error: 'Errore nella creazione del pianeta' });
  }
});

app.put("/planets/:id", async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  
  const { error } = planetSchema.validate({ name });

  if (error) {
    return res.status(400).json({ error: 'Errore nei dati del pianeta' });
  }

  try {
    await db.none(`UPDATE planets SET name=$2 WHERE id=$1`, [Number(id), name]);
    res.status(200).json({ msg: 'Il pianeta è stato aggiornato' });
  } catch (error) {
    res.status(500).json({ error: 'Errore nell\'aggiornamento del pianeta' });
  }
});

app.delete("/planets/:id", async (req, res) => {
  const { id } = req.params;
  
  try {
    await db.none(`DELETE FROM planets WHERE id=$1`, [Number(id)]);
    res.status(200).json({ msg: 'Il pianeta è stato eliminato' });
  } catch (error) {
    res.status(500).json({ error: 'Errore nella cancellazione del pianeta' });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
