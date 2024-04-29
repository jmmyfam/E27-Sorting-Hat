let students = [
  {
    name: 'Harry Potter',
    id: 1,
    house: 'Gryffindor',
    image: './images/gryffindor.png'
  },
  {
    name: 'Ron Weasley',
    id: 2,
    house: 'Gryffindor',
    image: './images/gryffindor.png'
  },
  {
    name: 'Hermione Granger',
    id: 3,
    house: 'Gryffindor',
    image: './images/gryffindor.png'
  },
  {
    name: 'Neville Longbottom',
    id: 4,
    house: 'Gryffindor',
    image: './images/gryffindor.png'
  },
  {
    name: 'Seamus Finnigan',
    id: 5,
    house: 'Gryffindor',
    image: './images/gryffindor.png'
  },
  {
    name: 'Remus Lupin',
    id: 6,
    house: 'Gryffindor',
    image: './images/gryffindor.png'
  },
  {
    name: 'Cedric Diggory',
    id: 7,
    house: 'Hufflepuff',
    image: './images/hufflepuff.png'
  },
  {
    name: 'Bridget Wenlock',
    id: 8,
    house: 'Hufflepuff',
    image: './images/hufflepuff.png'
  },
  {
    name: 'Fat Friar',
    id: 9,
    house: 'Hufflepuff',
    image: './images/hufflepuff.png'
  },
  {
    name: 'Silvanus Kettleburn',
    id: 10,
    house: 'Hufflepuff',
    image: './images/hufflepuff.png'
  },
  {
    name: 'Newton Scamander',
    id: 11,
    house: 'Hufflepuff',
    image: './images/hufflepuff.png'
  },
  {
    name: 'Pamona Sprout',
    id: 12,
    house: 'Hufflepuff',
    image: './images/hufflepuff.png'
  },
  {
    name: 'Cho Chang',
    id: 13,
    house: 'Ravenclaw',
    image: './images/ravenclaw.png' 
  },
  {
    name: 'Luna Lovegood',
    id: 14,
    house: 'Ravenclaw',
    image: './images/ravenclaw.png'
  },
  {
    name: 'Marcus Belby',
    id: 15,
    house: 'Ravenclaw',
    image: './images/ravenclaw.png'
  },
  {
    name: 'Filius Fitwick',
    id: 16,
    house: 'Ravenclaw',
    image: './images/ravenclaw.png'
  },
  {
    name: 'Padma Patil',
    id: 17,
    house: 'Ravenclaw',
    image: './images/ravenclaw.png'
  },
  {
    name: 'Uric the Oddball',
    id: 18,
    house: 'Ravenclaw',
    image: './images/ravenclaw.png'
  },
  {
    name: 'Draco Malfoy',
    id: 19,
    house: 'Slytherin',
    image: './images/slytherin.png'
  },
  {
    name: 'Severus Snape',
    id: 20,
    house: 'Slytherin',
    image: './images/slytherin.png'
  },
  {
    name: 'Tom Riddle',
    id: 21,
    house: 'Slytherin',
    image: './images/slytherin.png'
  },
  {
    name: 'Dolores Umbridge',
    id: 22,
    house: 'Slytherin',
    image: './images/slytherin.png'
  },

  {
    name: 'Marcus Flint',
    id: 23,
    house: 'Slytherin',
    image: './images/slytherin.png'
  },

  {
    name: 'Barnaby Lee',
    id: 24,
    house: 'Slytherin',
    image: './images/slytherin.png'
  }
];

// toggle form visibility
const toggle = () => {
  const form = document.getElementById("form");
  form.hidden = !form.hidden; 
};

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
            <h5 class="card-title" style="font-family: 'Harry Potter', sans-serif;">${student.name}</h5>
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
    html += `<div class="card mb-3" style="max-width: 300px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${student.image}" class="img-fluid rounded-start"  alt="..." style="background: transparent;">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title" style="font-family: 'Harry Potter', sans-serif;">${student.name}</h5>
            <p class="card-text">${student.house}</p>
          </div>
        </div>
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
            <h5 class="card-title" style="font-family: 'Harry Potter', sans-serif;">${ex.name}</h5>
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

// Event listeners for filtering students
const showAll = document.querySelector('#viewAll');
const showGryff = document.querySelector('#viewGryff');
const showHuff = document.querySelector('#viewHuff');
const showRave = document.querySelector('#viewRave');
const showSlyth = document.querySelector('#viewSlyth');

showAll.addEventListener('click', () => {
  students.sort((a, b) => a.name.localeCompare(b.name)); // sort alphabetically
  cardsWithDelete(students);
  expelCardsOnDom(eStudents);
});

showGryff.addEventListener('click', () => {
  const gryffs = filter(students, 'Gryffindor');
  cardsOnDom(gryffs);
  expelCardsOnDom(filter(eStudents, 'Gryffindor')); // show expelled students on DOM, filter to ensure they are displayed within their respective former houses
});

showHuff.addEventListener('click', () => {
  const huffs = filter(students, 'Hufflepuff');
  cardsOnDom(huffs);
  expelCardsOnDom(filter(eStudents, 'Hufflepuff'));
});

showRave.addEventListener('click', () => {
  const raves = filter(students, 'Ravenclaw');
  cardsOnDom(raves);
  expelCardsOnDom(filter(eStudents, 'Ravenclaw'));
});

showSlyth.addEventListener('click', () => {
  const slyths = filter(students, 'Slytherin');
  cardsOnDom(slyths);
  expelCardsOnDom(filter(eStudents, 'Slytherin'));
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
  let sortingMessage = '';
  if (randomHouse === 'Gryffindor') {
    sortingMessage = `${studentName} huh? I sense bravery, courage & a hint of chivalry... where else but... Gryffindor!`;
  } else if (randomHouse === 'Hufflepuff') {
    sortingMessage = `Hmm.. hard work, patience, loyalty & fairness. ${studentName}, you have all the qualities of a... Hufflepuff!`;
  } else if (randomHouse === 'Ravenclaw') {
    sortingMessage = `Interesting... Intelligent, witty, and knowledgeable. I know just where to put you. ${studentName}, off to Ravenclaw you go!`;
  } else if (randomHouse === 'Slytherin') {
    sortingMessage = `Ahh.. I see... cunningness and resourcefulness, but above all else, ambition. ${studentName}, Slytherin will help you on the way to greatness!`;
  }
  
  document.getElementById('assignedHouse').innerHTML = sortingMessage ; // display sorting message
};

// form submission event listener
document.getElementById('submit').addEventListener('click', assignHouse);
