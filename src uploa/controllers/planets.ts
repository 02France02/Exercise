import { Request, Response } from "express";
import Joi from "joi";
import pgPromise from "pg-promise";
// Joi schema : l'ID deve essere un numero intero, il campo è richiesto
//              il NAME deve essere una stringa richiesta

const db = pgPromise()("postgres://postgres:123456789@localhost:5432/movies");

console.log(db);

const setupDb = async () => {
  db.none(`
    DROP TABLE IF EXISTS planets

    CREATE TABLE planets (
      id SERIAL NOT NULL PRIMARY KEY,
      name TEXT NOT NULL,
      image TEXT
    )
  `);

  await db.none(`INSERT INTO planets (name) VALUES ('earth')`);
  await db.none(`INSERT INTO planets (name) VALUES ('mars')`);
  await db.none(`INSERT INTO planets (name) VALUES ('jumpiter')`);
};

const getAll = async (req: Request, res: Response) => {
  const planets = await db.many(`SELECT * FROM TABLE planets`);
  console.log(planets);
  res.status(200).json(planets);
};

const getOne = async (req: Request, res: Response) => {
  const { id } = req.params;
  const planet = await db.one(
    `SELECT * FROM planets WHERE id=$1; `,
    Number(id)
  );
  res.status(200).json(planet);
};

const planetSchema = Joi.object({
  name: Joi.string().required(),
});

const create = async (req: Request, res: Response) => {
  const newPlanet = { name: req.body.name };
  const validateNewPlanet = planetSchema.validate(newPlanet);

  if (validateNewPlanet.error) {
    return res.status(400).json({ msg: "Error has accurred" });
  } else {
    await db.none(` INSERT INTO planets (name) VALUES ($1)`, req.body.name);
    res.status(200).json({ msg: "the planet was created" });
  }
};

const updatebyId = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;
  await db.none(` UPDATE planets SET name=$2 WHERE id=$1`, [id, name]);
  res.status(200).json({ msg: "the planet was updated" });
};

const deleteById = async (req: Request, res: Response) => {
  const { id } = req.params;
  await db.none(`DELETE FROM planet WHERE ID=$1`, Number(id));
  res.status(200).json({ msg: "the planet was deleted" });
};

const createImage = async (req: Request, res: Response) => {
  console.log(req.file);
  const { id } = req.params;
  const fileName = req.file?.path;

  if (fileName) {
    db.none(`UPDATE planets SET image=$2 WHERE id=$1`, [id, fileName]);
    res.status(201).json({ msg: "Planet image uploaded" });
  } else {
    res.status(400).json({ msg: "Planet image faield uploaded" });
  }
};

export { getAll, getOne, create, updatebyId, deleteById, createImage };
