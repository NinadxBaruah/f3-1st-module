// Define an array to store employees
let employees = [];

// Get form and messages elements
const form = document.getElementById("employee-form");
const messages = document.getElementById("messages");

// Get added employees element
const addedEmployees = document.getElementById("added-employees");

// Add employee event listener
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const profession = document.getElementById("profession").value.trim();
  const age = document.getElementById("age").value.trim();

  if (!name || !profession || !age) {
    messages.innerHTML = "<p id='error-msg'>Please fill in all fields</p>";
  } else {
    const id = employees.length + 1;

    employees.push({ id, name, profession, age });

    form.reset();

    messages.innerHTML = "<p id='success-msg'>Employee added successfully</p>";

    displayEmployees();
  }
});

function displayEmployees() {
  addedEmployees.innerHTML = "";

  employees.forEach((employee) => {
    const employeeDiv = document.createElement("div");
    employeeDiv.classList.add("employee");
    employeeDiv.setAttribute("data-id", employee.id);

    const employeeName = document.createElement("h2");
    employeeName.textContent = employee.name;
    employeeDiv.appendChild(employeeName);

    const employeeProfession = document.createElement("p");
    employeeProfession.textContent = employee.profession;
    employeeDiv.appendChild(employeeProfession);

    const employeeAge = document.createElement("p");
    employeeAge.textContent = employee.age;
    employeeDiv.appendChild(employeeAge);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete Employee";
    deleteButton.classList.add("delete-btn");
    deleteButton.addEventListener("click", deleteEmployee);
    employeeDiv.appendChild(deleteButton);

    addedEmployees.appendChild(employeeDiv);
  });
}

function deleteEmployee(e) {
  const id = parseInt(e.target.parentElement.getAttribute("data-id"));

  employees = employees.filter((employee) => employee.id !== id);

  displayEmployees();
}
