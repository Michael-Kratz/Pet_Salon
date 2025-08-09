// Global Variables
const petRegistrationForm = document.getElementById("petRegistrationForm");

// Object Literal
let pet1 = {
  name: "Walter",
  breed: "Dog",
  age: 6,
  gender: "Male",
  service: "Grooming",
};

// How to access to the attributes?
// objetName.attribute
//console.log(pet1.service);

// Object Constructor
function Pet(name, age, breed, gender, service) {
  (this.name = name),
    (this.age = age),
    (this.breed = breed),
    (this.gender = gender),
    (this.service = service);
}

// Creating a Pet object with the constructor

const pet2 = new Pet("Lala", 3, "Cat", "Female", "Daycare");

console.log(pet2.bree);

// Interpolation
console.log(`The name of the pet2 is ${pet2.name} and the age is ${pet2.age}`);

function registerPet(event) {
  //Prevent the browser to be reloaded after clicking submit
  event.preventDefault();

  // Testing our function
  console.log("Register Pet Funcion");

  // Get the values typed in the form
  const name = petRegistrationForm.elements["petName"].value;
  const age = petRegistrationForm.elements["petAge"].value;
  const gender = petRegistrationForm.elements["petGender"].value;
  const breed = petRegistrationForm.elements["petBreed"].value;
  const service = petRegistrationForm.elements["petService"].value;

  //Create a new pet with the object constructor
  const newPet = new Pet(name, age, breed, gender, service);

  // Display the pet in the browser
  displayRow(newPet);

  petRegistrationForm.reset();
}

function displayRow(pet) {
  const table = document.getElementById("petTable");
  const tableBody = table.tBodies[0];

  // Create a new row
  const newRow = document.createElement("tr");

  // Create the cells (I will only include two, you should include the rest)
  const name = document.createElement("td");
  const age = document.createElement("td");

  // Assign the information of the pet from the object
  name.textContent = pet.name;
  age.textContent = pet.age;

  // Append the created cells (name and age) to the row
  newRow.appendChild(name);
  newRow.appendChild(age);

  // Append the created row to the table body
  tableBody.appendChild(newRow);
}
