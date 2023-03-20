//Challenge 1:Student Grade Generator (Toy Problem)

// Define the student's marks as a constant
const marks = 100;


// Output the correct grade based on the student's marks
let grade;
if ( marks => 80){
    grade =  "A";
} else if (marks >= 60 && marks <= 79){
    grade = "B";
}else if (marks >= 50 && marks <= 59 ){
    grade = "C";
} else if (marks >= 40 && marks <= 49){
    grade = "D";
} else {
    grade = "E";
} 

//Output of the student's grade 
console.log(`Brian got an ${grade}.`);


