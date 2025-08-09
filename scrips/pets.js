let pets = [
  {
    name: "Rosey",
    age: 8,
    gender: "Female",
    service: "Bathing",
    breed: "Miniature Schnauzer",
    color: "Gray",
  },
  {
    name: "Jackie",
    age: 3,
    gender: "Female",
    service: "Grooming",
    breed: "German Shepherd",
    color: "Black & Tan",
  },
  {
    name: "Max",
    age: 5,
    gender: "male",
    service: "Nail Trim",
    breed: "Pitbull",
    color: "Brown",
  },
];

// Pet Constructor
function Pet(name, age, gender, breed, service, type, color) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.breed = breed;
  this.service = service;
  this.type = type;
  this.color = color;
}

// Pet count
function displayPetCount() {
  const countElement = document.getElementById("petCount");
  if (countElement) {
    countElement.innerText = "Total Pets: " + pets.length;
  }
}

// Displaying pet names
function displayRow() {
  const tbody = document.querySelector("#petTable tbody");
  tbody.innerHTML = "";

  for (let i = 0; i < pets.length; i++) {
    const pet = pets[i];

    let row = document.createElement("tr");

    row.innerHTML = `
      <th scope="row">${i + 1}</th>
      <td>${pet.name}</td>
      <td>${pet.age}</td>
      <td>${pet.service}</td>
      <td>${pet.breed}</td>
      <td>${pet.color}</td>
      <td><button class="btn btn-danger btn-sm" onclick="deletePet(${i})">Delete</button></td>
    `;

    tbody.appendChild(row);
  }
}

//Delete Button
function deletePet(index) {
  if (confirm("Are you sure you want to delete this pet?")) {
    pets.splice(index, 1);
    displayRow();
    displayPetCount();
  }
}

// Register new pet
function registerPet(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const age = parseInt(document.getElementById("age").value);
  const gender = document.getElementById("gender").value;
  const breed = document.getElementById("breed").value;
  const service = document.getElementById("service").value;
  const type = document.getElementById("type").value;
  const color = document.getElementById("color").value;

  const newPet = new Pet(name, age, gender, breed, service, type, color);
  pets.push(newPet);

  displayPetCount();
  displayRow();

  // Clear form
  document.getElementById("petForm").reset();
}

document.getElementById("petForm").addEventListener("submit", registerPet);

// Call display Ffnctions
document.addEventListener("DOMContentLoaded", () => {
  // displaySalonInfo(); // Remove or comment out if not defined
  displayPetCount();
  displayRow();
});
