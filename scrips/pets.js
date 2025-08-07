let pets = [
  {
    name: "Rosey",
    age: 8,
    gender: "Female",
    server: "Bathing",
    breed: "Miniature Schnauzer",
  },
  {
    name: "Jackie",
    age: 3,
    gender: "Female",
    server: "Grooming",
    breed: "German Shepherd",
  },
  {
    name: "Max",
    age: 5,
    gender: "male",
    server: "Nail Trim",
    breed: "Pitbull",
  },
];

// Displaying pet names
function displayPetNames() {
  let list = document.getElementById("petsName");
  list.innerHTML = "";
  for (let i = 0; i < pets.length; i++) {
    let li = document.createElement("li");
    li.textContent = pets[i].name;
    list.appendChild(li);
  }
}

displayPetNames();

// Pet count
function petCount() {
  let total = pets.length;
  document.getElementById("result").textContent = "Total Pets: " + total;
}
