# Sorting Hat https://thesortingceremony.netlify.app

## Preview

<img width='750' alt='app preview' src='/images/preview.png'>

## Goals

1. Set up index.html

- Header (banner)
- Subheader
- Section for Sorting Hat, form, and sorting message display
- Bootstrap for form
- Buttons
- Divs for my house info, students, & expelled students

2. Started with a basic layout and functions of my page

- Build student data with the following key-values:
  -ID
  -Name
  -House
  -Image

3. Added a footer section
4. Build functions in main.js

- Created functions to loop through my array of students and render to dom
  I had 3 separate functions because I wanted my cards to render differently (1 with a delete button and 1 without a delete button, also one for expelled students)
- Used the filter function from Pet Adoption and changed to filter by house
- Created event listeners for my buttons for each house including all students
- Created function to assign random house, create a new student object and push them to students array
- Used the delete function from Pet Adoption and applied to this project. The expelled students are pushed into an empty array and rendered into a different div.

5. Spent a few hours styling

## Stretch Goals

1. I wanted to somehow toggle my form when I click the Sorting Hat button. I was able to do so by giving my form a 'hidden' attribute and creating a function that removes or adds that attribute when I click my Sorting Hat button
2. Made a function to display an error message when the Sort button is clicked but there is no input in the form
3. Sort array alphabetically when pressing the All Students button by using the .sort method as well as .localeCompare method
4. I wanted a different message to display depending on which house the student is sorted into. Achieved this using switch/case
5. Applied the same logic for different sorting message and used another switch/case to render different house info depending on which button is clicked
6. All of my expelled students showed in every button initially, so I used the filter function to only render by former house
7. Added favicon
8. Used modules and separated my functions into different JS files
9. Added confirmation window to expelStudent function

## Styling Goals

1. Animate the way my form shows when Sorting Hat is clicked
2. Hover Effect On Cards
3. Added different hover effects to buttons
