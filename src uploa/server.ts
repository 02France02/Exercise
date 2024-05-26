import express from "express";
import "express-async-errors";
import morgan from "morgan";
import { getAll, getOne, create, updatebyId, deleteById, createImage } from "./controllers/planets.js";
import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });
const app = express();
const port = 3000;

// Accesso alla cartella file da utente nel database
app.use("/uploads", express.static("uploads"))
// Per accederev alle impostazioni csso altro
app.use("/static", express.static("static"))



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

app.post("/api/planets/:id/image", upload.single("image"), createImage);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});

// Facendo un GET su PostMan, riusciamo ad ottenere i dati degli array creati
