//Question 16
let Character = "A"

if (Character == Character.toUpperCase()){
    console.log(Character + " is an uppercase letter")
}
else if(Character == Character.toLowerCase()){
    console.log(Character + " is a lowercase letter")
}
else {
    console.log(Character + " is neither lowercase nor upper case")
};

//Question 17
let age = 25;
let hasLicense = true;

if (age >= 18 && hasLicense) {
    console.log("You are Eligible to drive")
}
else {
    console.log("You are not eligible to drive")
}

//Question 18
let totalAmount = 1000;
let isMember = true;

if (isMember){
    console.log( totalAmount - (20/100) * totalAmount  )
}
else {
    console.log(totalAmount - (5/100) * totalAmount)
}

//Question 19
let number = 15;

console.log(number >= 3 && 3)
console.log(number >=6 && 6 )
console.log(number >= 9 && 9)
console.log(number >=12 && 12 )
console.log(number >= 15 && 15)

//Question 20
let hour = 18;

if (hour >=5 && hour <= 11){
    console.log("Good morning")
}
else if (hour >=12 && hour <= 17){
    console.log("Good Afternoon")
}
else if (hour >=18 && hour <= 21){
    console.log("Good night")
}
else {
    console.log("No time")
};