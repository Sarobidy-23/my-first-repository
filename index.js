export default function CodinGame(BEGIN,END){// const prompt = require("prompt-sync")();
// const begin = prompt("Enter the start date : ") 
// const end = prompt("Enter the end date : ")

//to better process the input, it must be converted into an array
let begin = BEGIN.split(".");
let end = END.split(".");

let beginDate = new Date(begin[2], begin[1]-1, begin[0]);
let endDate = new Date(end[2], end[1]-1, end[0]);

// number of months between the two dates
let months = (endDate.getFullYear() - beginDate.getFullYear())*12 - beginDate.getMonth() + endDate.getMonth() - (beginDate.getDate() > endDate.getDate())

//the year and the remaining month
let year = Math.trunc(months/12)
months = months%12;

//convert the distance between the two dates into days
let days = (endDate - beginDate)/(1000*60*60*24);

//reform the output to look like the data requested at the beginning
let output = []
  if(year === 1) output.push("1 year");
  if(year > 1) output.push(year+" years");

  if(months === 1) output.push("1 month");
  if(months > 1) output.push(months + " months");
 
output.push("total " + days + " days");

//the famous output in question
  return(output.join(", "));
}

//you can't be satisfied with just the test already written but you can generate your own input
// console.log(CodinGame("01.01.2000","01.01.2016"))