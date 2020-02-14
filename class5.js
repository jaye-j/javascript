

function Course (title, instructor, campus){

    this.title = title;
    this.instructor = instructor;
    this.campus = campus;
};

let janCohort = new Course("Immersive bootcamp", "Veronica", "Houston");
let janCohort2 = new Course("Immersive bootcamp", "Sean", "Atlanta");


console.log(janCohort.instructor);



// let classes = [];

// classes.push(janCohort);
// classes.push(janCohort2);

// let classes = [
//     new Course("Immersive", "Veronica", "Houston"),
//     new Course("Immersive", "Sean", "Atlanta")
// ];


// let obj1 = {
//     title: "Immersive bootcamp",
//     instructor: "Veronica",
//     campus: "Houston"
// };

// let obj2 = {
//     title: "Immersive bootcamp",
//     instructor: "Sean",
//     campus: "Atlanta"
// };