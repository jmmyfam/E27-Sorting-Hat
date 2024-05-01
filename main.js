import students from './data/studentData.js'

// util function
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

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

const eStudents = []; // deleted students empty array

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

// delete student function
const expelStudent = (e) => {
  if (e.target.id.includes("expelButton")) {
    const [, studentId] = e.target.id.split('--');
    const studentIndex = students.findIndex((student) => Number(studentId) === student.id);
    const expelledStudent = students.splice(studentIndex, 1);
    eStudents.push(expelledStudent[0]);
    expelCardsOnDom(eStudents);
    cardsWithDelete(students);
  }
};

// filter students by house
const filter = (array, byHouse) => {
  const stuArray = [];
  for (const stu of array) {
    if (stu.house === byHouse) {
      stuArray.push(stu);
    }
  }
  return stuArray; // Returns filtered array of students by house
};

const houseInfo = document.getElementById('houseinfo');

function displayHouseInfo(house) {
  let info = '';
  switch (house) {
    case 'Gryffindor': 
    info = 'Welcome to <strong>House Gryffindor</strong>, founded by Godric Gryffindor.<br> Known for their unwavering courage, bravery, and determination.';
      break;
    case 'Hufflepuff':
      info = 'Welcome to <strong>House Hufflepuff</strong>, founded by Helga Hufflepuff.<br> Renowned for being just, trustworthy, & loyal.';
      break;
    case 'Ravenclaw':
      info = 'Welcome to <strong>House Ravenclaw</strong>, founded by Rowena Ravenclaw.<br> Acclaimed for their wisdom, wit, & intellect.';
      break;
    case 'Slytherin':
      info = 'Welcome to <strong>House Slytherin</strong>, founded by Salazar Slytherin.<br> Notorious for their determination, resourcefulness, & ambition.'
      break;
    default:
      break;
  }
  houseInfo.innerHTML = info;
}
// Event listeners for filtering students
const showAll = document.querySelector('#viewAll');
const showGryff = document.querySelector('#viewGryff');
const showHuff = document.querySelector('#viewHuff');
const showRave = document.querySelector('#viewRave');
const showSlyth = document.querySelector('#viewSlyth');

showAll.addEventListener('click', () => {
  students.sort; // sort alphabetically
  cardsWithDelete(students);
  expelCardsOnDom(eStudents);
  houseInfo.innerHTML = '';
});

showGryff.addEventListener('click', () => {
  const gryffs = filter(students, 'Gryffindor');
  cardsOnDom(gryffs);
  expelCardsOnDom(filter(eStudents, 'Gryffindor'));
  displayHouseInfo('Gryffindor');
});

showHuff.addEventListener('click', () => {
  const huffs = filter(students, 'Hufflepuff');
  cardsOnDom(huffs);
  expelCardsOnDom(filter(eStudents, 'Hufflepuff'));
  displayHouseInfo('Hufflepuff');
});

showRave.addEventListener('click', () => {
  const raves = filter(students, 'Ravenclaw');
  cardsOnDom(raves);
  expelCardsOnDom(filter(eStudents, 'Ravenclaw'));
  displayHouseInfo('Ravenclaw');
});

showSlyth.addEventListener('click', () => {
  const slyths = filter(students, 'Slytherin');
  cardsOnDom(slyths);
  expelCardsOnDom(filter(eStudents, 'Slytherin'));
  displayHouseInfo('Slytherin');
});          

// assign house to new student
const assignHouse = (e) => {
  e.preventDefault(); // prevent default submission behavior
  const studentName = document.getElementById('studentName').value; // get input from form

  // error message if submit no input
  if (studentName.trim() === "") {
    alert("Please enter your name");
    return;
  }
  const newId = students.length + 1; // generate random id for new student

  // random house for new student
  const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];
  const randomHouse = houses[Math.floor(Math.random() * houses.length)];

  // new student object
  const newStudent = {
    name: studentName,
    id: newId,
    house: randomHouse,
    image: `./images/${randomHouse.toLowerCase()}.png`
  };
  students.push(newStudent);
  const sortedStudents = filter(students, randomHouse);
  cardsOnDom(sortedStudents);
  document.querySelector("form").reset();

  // render sorting message dependant on random house

switch (randomHouse) {
  case 'Gryffindor':
    sortingMessage = `${studentName} huh? I sense bravery, courage & a hint of chivalry... where else but... Gryffindor!`;
    break;
  case 'Hufflepuff':
    sortingMessage = `Hmm.. hard work, patience, loyalty & fairness. ${studentName}, you have all the qualities of a... Hufflepuff!`;
    break;
  case 'Ravenclaw':
    sortingMessage = `Interesting... Intelligent, witty, and knowledgeable. I know just where to put you. ${studentName}, off to Ravenclaw you go!`;
    break;
  case 'Slytherin': 
    sortingMessage = `Ahh.. I see... cunningness and resourcefulness, but above all else, ambition. ${studentName}, Slytherin will help you on the way to greatness!`;
    break;
  default:
    `I can't seem to determine where you belong`;
}

  document.getElementById('assignedHouse').innerHTML = sortingMessage ; // display sorting message
};

// form submission event listener
document.getElementById('submit').addEventListener('click', assignHouse);
