//Question 11
let marks = 85;

if (marks >= 90) {
    console.log("A")
}
else if (marks >= 80){
    console.log("B")
}
else if (marks >= 70){
    console.log("C")
}
else if (marks >= 60){
    console.log("D")
}
else {
    console.log("F")
};

//Question 12
let length = 5;
let width = 10;

const area = length * width;
const perimeter = 2*(length + width);

console.log("The Area of this rectangle is " + " " + area);
console.log("The Perimeter of this rectangle is " + " " + perimeter);

//Question 13
let year = 2024;

if (year % 400 === 0 ){
    console.log(year + " is a leap year")
}
else if (year % 100 === 0){
    console.log(year + " is not a leap year")
}
else if (year % 4 === 0){
    console.log(year + " is a leap year")
}
else {
    console.log(year + " is not a leap year")
}

//Question 14
let number = 17

if (number % 3 === 0 & number % 5 === 0){
    console.log(number + " is divisible by 3 and 5")
}
else if (number % 3 === 0){
    console.log(number + " can only be divided by 3")
}
else if (number % 5 === 0){
    console.log(number + " can only be divided by 5")
}
else {
    console.log(number + " cannot be divided by 5 or 3")
};

//Question 15
let subject1 = 78;
let subject2 = 85;
let subject3 = 92;

const Average = (subject1 + subject2 + subject3)/3

if (Average >= 90){
    console.log("Excellent")
}
else if(Average >= 75){
    console.log("Good")
}
else if(Average >= 60){
    console.log("Average")
}
else{
    console.log("Needs Improvement")
}

