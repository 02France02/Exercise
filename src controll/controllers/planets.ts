import { Request, Response, response } from "express";
import Joi from "joi";

// Joi schema : l'ID deve essere un numero intero, il campo è richiesto
//              il NAME deve essere una stringa richiesta
const planetSchema = Joi.object({
  id: Joi.number().integer().required(),
  name: Joi.string().required(),
});

type Planet = {
  id: number;
  name: string;
};

type Planets = Planet[];

let planets: Planets = [
  { id: 1, name: "Earth" },
  { id: 2, name: "Mars" },
  { id: 3, name: "Moon" },
];

const getAll = (req: Request, res: Response) => {
  res.status(200).json(planets);
};

const getOne = (req: Request, res: Response) => {
  const { id } = req.params;
  const planet = planets.find((p) => p.id === Number(id));
  res.status(200).json(planet);
};

const create = (req: Request, res: Response) => {
  const { id, name } = req.body;
  const newPlanet: Planet = { id, name };
  const validateNewPlanet = planetSchema.validate(newPlanet);

  if (validateNewPlanet.error) {
    return res.status(400).json({ msg: "Error has accurred" });
  } else {
    planets = [...planets, newPlanet];
    res.status(200).json({ msg: "the planet was created" });
  }
};

const updatebyId = (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;
  planets = planets.map((plan) =>
    plan.id === Number(id) ? { ...plan, name } : plan
  );
  res.status(200).json({ msg: "the planet was updated" });
};


const deleteById = (req: Request, res: Response) => {
  const { id } = req.params;
  planets = planets.filter((plan) => plan.id !== Number(id));
  res.status(200).json({ msg: "the planet was deleted" });
};

export { getAll, getOne, create, updatebyId, deleteById };
