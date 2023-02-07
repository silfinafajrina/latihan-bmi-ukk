//DDM Elements
const studentForm = document.getElementById("studentForm");
const studentContainer = document.getElementById("students");
const nameInput = document.getElementById["name"];
const ageInput = document.getElementById["age"];
const rollInput = document.getElementById["roll"];

// const nameInput = studentForm["name"];
// const ageInput = studentForm["age"];
// const rollInput = studentForm["roll"];

// {

// }


const students = JSON.parse(localStorage.getItem("students")) || [];

const addstudent = (name, age, roll) => {
    students.push({
        name,
        age,
        roll
    }); 
localStorage.setItem("students", JSON.stringify(students));

    return { name,ago, roll};
};

const createStudentElement = ({ name, age, roll}) => {
    //create elements
    const studentDiv = document.createElement('div');
    const studentName = document.createElement('h2');
    const studentAge = document.createElement('p');
    const studentRoll = document.createElement('p');

    //fill the content
    studentName.InnerText ="Student name: " + name;
    studentAge.innerText = "Student age: " + age;
    studentRoll.innerText = "Student roll:" + roll;

    //Add to the DOM
    studentDiv.append(studentName, studentAge, studentRoll);
    studentContainer.appendChild(studentDiv);
    studentsContainer.style.display = students.length === 0? "none" : "flex";
};
    // studentsContainer.style.display = students.length === 0? "none" : "flex"; 

students.forEach(createStudentElement);

studentForm.onsubmit = e => {
    e.preventDefault();

    const newStudent = addstudent(
        nameInput.value,
        ageInput.value,
        rollInput.value
    );
    createStudentElement(newStudent)

    nameInput.value ="";
    ageInput.value ="";
    rollInput.value ="";
};