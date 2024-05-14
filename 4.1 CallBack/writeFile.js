const fs = require("fs")

fs.writeFile("./newReadme.txt", "Ciao sono un nuovo file", (err, data) => {
    if (err) {
      console.error("Errore durante la scrittura del file");
    }
    console.log(data);

    fs.writeFile("./newReadme2.txt", "Ciao sono un secondo nuovo file", (err, data) => {
        if (err) {
          console.error("Errore durante la scrittura del file");
        }
        console.log(data);
      });
  });