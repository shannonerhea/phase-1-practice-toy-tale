let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});
// tried to ask a TC for help but I dont think I even formulated my question properly and got offf the call and just cried!
fetch('http://localhost:3000/toys')
.then(response => response.json())
.then(toys => {
  toys.forEach(toy => {

  })
})
// i need to add a div elememt and in that div create h2 img p and Btn
function renderToyCard(toy) {
  
};
// 1. (fetch Andys toys)i think this is asking me to write a function to make a card for each toy and run it right away in my forEach
// "When the page loads, make a 'GET' request to fetch all the toy objects. With the response data, make a <div class="card"> for each toy and add it to the toy-collection div."

// 2. (Add Toy Info to the Card) I am so lost!
// document.createElement('h2')
// document.createElement('img')
// document.createElement('p')
// document.createElement('button')
