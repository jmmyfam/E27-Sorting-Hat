import { expelStudent } from "../main.js";
import renderToDom from "../utils/renderToDom.js";

// loop thru students array & render
const cardsWithDelete = (array) => {
  array.sort((a, b) => a.name.localeCompare(b.name));
  let html = '';
  array.forEach((student) => {
    html += `<div class="card mb-3" style="max-width: 300px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${student.image}" class="img-fluid rounded-start"  alt="..." style="background: transparent;">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${student.name}</h5>
            <p class="card-text">${student.house}</p>
          </div>
        </div>
      </div>
      <button id="expelButton--${student.id}" class="btn btn-danger" style="font-family: 'Harry Potter', sans serif">Expelliarmus</button>
    </div>`;
  });
  renderToDom('#students', html);
  document.querySelector('#students').addEventListener('click', expelStudent); // event listener for deleting students
};

// loop & render no delete button
const cardsOnDom = (array) => {
  let html = '';
  array.forEach((student) => {
    html += `<div class="card" style="width: 18rem;">
    <img src="${student.image}" class="card-img-top" alt="House Sigil" style="background: transparent;">
    <div class="card-body">
      <h3 class="card-title">${student.name}</h3>
    </div>
  </div>`;
  });
  renderToDom('#students', html);
};



// render deleted students
const expelCardsOnDom = (array) => {
  let html = "";
  array.forEach((ex) => {
    html += `<div class="card mb-3" style="max-width: 300px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="./images/death.png" class="img-fluid rounded-start"  alt="..." style="background: transparent;">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${ex.name}</h5>
            <p class="card-text">Death Eater<br>Formally ${ex.house}</p>
          </div>
        </div>
      </div>
    </div>`;
  });
  renderToDom("#expelled", html); 
};

export { cardsWithDelete, cardsOnDom, expelCardsOnDom };
