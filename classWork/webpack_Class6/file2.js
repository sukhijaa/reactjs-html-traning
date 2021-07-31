import './file2.css';
console.log("File 2");

const MONTH = {
    "JAN": "Jan",
    "FEB": "Feb",
    "MAR": "Mar",
    "APR": "Apr",
    "MAY": "May",
};

console.log(MONTH.APR);

export const CENTURY = {
    "TwentyFirst": "21st",
    "Twentith": "20th"
};

export default MONTH;

const element = document.createElement("div");
element.innerText = "I am from File 2";
document.body.appendChild(element);