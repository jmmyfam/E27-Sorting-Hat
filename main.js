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


// hide/show form toggle function
const toggle = () => {
  const form = document.getElementById("form");
  form.hidden = !form.hidden;
};

// utility function
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

// render cards to DOM 
const cardsWithDelete = (array) => {
  let html = '';
  array.forEach((student) => {
    html += `<div class="card mb-3" style="max-width: 300px;">
    <div class="row g-0">
    <div class="col-md-4">
    <img src="${student.image}" class="img-fluid rounded-start"  alt="..." style="background: transparent;" >
    </div>
    <div class="col-md-8">
    <div class="card-body">
    <h5 class="card-title" style="font-family: 'Harry Potter', sans-serif;">${student.name}</h5>
    <p class="card-text">${student.house}</p>
    </div>
    </div>
    </div>
    <button id="expelButton--${student.id}" class="btn btn-danger" style="font-family: 'Harry Potter', sans serif">Expelliarmus</button>
    </div>`
  });
  
  renderToDom('#students', html)
  
  document.querySelector('#students').addEventListener('click', expelStudent);
};

// render cards w/o delete button 
const cardsOnDom = (array) => {
  let html = '';
  array.forEach((student) => {
    html += `<div class="card mb-3" style="max-width: 300px;">
    <div class="row g-0">
    <div class="col-md-4">
    <img src="${student.image}" class="img-fluid rounded-start"  alt="..." style="background: transparent;" >
    </div>
    <div class="col-md-8">
    <div class="card-body">
    <h5 class="card-title" style="font-family: 'Harry Potter', sans-serif;">${student.name}</h5>
    <p class="card-text">${student.house}</p>
    </div>
    </div>
    </div>
    </div>`
  });
  
  renderToDom('#students', html);
};

// cardsOnDom(students);
// cardsNoDelete(students);


// empty array for expelled students
const eStudents = [];

// expelled students on DOM 
const expelCardsOnDom = (array) => {
  let html = "";
  for (const ex of array) {
    html += `<div class="card mb-3" style="max-width: 300px;">
    <div class="row g-0">
    <div class="col-md-4">
    <img src="./images/death.png" class="img-fluid rounded-start"  alt="..." style="background: transparent;" >
    </div>
    <div class="col-md-8">
    <div class="card-body">
    <h5 class="card-title" style="font-family: 'Harry Potter', sans-serif;">${ex.name}</h5>
    <p class="card-text">Death Eater<br>Formally ${ex.house}</p>
    </div>
    </div>
    </div>
    </div>`;
  }
  
  
  renderToDom("#expelled", html);
};

// function to delete 
const expelStudent = (e) => {
  
  if (e.target.id.includes("expelButton")) {
    const [, studentId] = e.target.id.split('--');

    const studentIndex = students.findIndex(
      (stu) => Number(studentId) === stu.id 
      );
      
        const expelledStudent = students.splice(studentIndex, 1);
        
        eStudents.push(expelledStudent[0]);


        expelCardsOnDom(eStudents);
        cardsWithDelete(students);
      }
    };

//function to filter students by house

const filter = (array, byHouse) => {
  const stuArray = [];
  
  for (const stu of array) {
    if (stu.house === byHouse) {
      stuArray.push(stu);
    }
  }
    return stuArray;
  };
  
  const showAll = document.querySelector('#viewAll');
  const showGryff = document.querySelector('#viewGryff');
  const showHuff = document.querySelector('#viewHuff');
  const showRave = document.querySelector('#viewRave');
  const showSlyth = document.querySelector('#viewSlyth');
  
  showAll.addEventListener('click', () => {
    cardsWithDelete(students);
    expelCardsOnDom(eStudents);
  });
    
  
  showGryff.addEventListener('click', () => {
    const gryffs = filter(students, 'Gryffindor');
    cardsOnDom(gryffs);
    expelCardsOnDom(filter(eStudents, 'Gryffindor'));
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
           

  const assignHouse = () => {
    // Get the input value from the form
    const studentName = document.getElementById('studentName').value;

    // display message if no input in name field
    if (studentName.trim() === "") {
      alert("Please enter your name");
      return;
    }
  
  
    // generate a random ID for the new student
    const newId = students.length + 1;
  
    // get a random house for the new student
    const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];
    const randomHouse = houses[Math.floor(Math.random() * houses.length)];
  
    // create a new student object
    const newStudent = {
      name: studentName,
      id: newId,
      house: randomHouse,
      image: `./images/${randomHouse.toLowerCase()}.png`
    };
  
    // add new student to the students array
    students.push(newStudent);
  
    const sortedStudents = filter(students, randomHouse)
    // render the updated list of students
    cardsOnDom(sortedStudents);
  
    // clear the form input field
    document.querySelector("form").reset();
  
    // display the sorting message
    document.getElementById('assignedHouse').innerHTML = `${studentName} has been assigned to ${randomHouse}!`;
  };
  
  // event listener for form submission
  document.getElementById('submit').addEventListener('click', assignHouse);
  
