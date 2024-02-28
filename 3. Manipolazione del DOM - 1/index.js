

const addProduct = () => {
  //chiamo il valore dell'input
  let input = document.getElementById("my-input").value;

  //creo i List Item
  let li = document.createElement("li");

  //Creo una checkBox
  let checkbox = document.createElement("input");
  //assegno all'input il valore checkbox
  checkbox.setAttribute("type", "checkbox")

  //creo una lable nella quale mettere un txt
  let label = document.createElement("label")
  //IL contenuto della LABEL deve essere uguale al valore d'input con InnerText o textContent
  label.innerText = input 


  //Appendo all'LI una checkbox
  li.appendChild(checkbox)
  //Appendo all'LI la label
  li.appendChild(label)

  //Creo un bottone rimuovi voce
  let removeButton = document.createElement("button")
  removeButton.textContent = "X"
  
  //Al click, cancella la voce
  removeButton.onclick = () => {
    li.remove();
  }

  //appendo ad LI il button
  li.appendChild(removeButton)

  //chiamo la lista dall'html
  let ul = document.querySelector("#my-ul");
  //Appendo all'UL l'LI aggiornato con la checkbox
  ul.appendChild(li)
  
};

