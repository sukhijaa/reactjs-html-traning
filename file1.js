// import {MONTH} from './file2.js';
import NEW_MONTH from './file2.js';
const msgObj = require("./file3");
const yearObj = require("./file2.js");
import {CENTURY as NEW_CENTURY} from './file2.js';
import * as ALL from './file2';
import './file1.css';
// import * as ALLFrom4 from './file4';

console.log("File 1");
console.log(msgObj.str1, msgObj.str2);
console.log(NEW_MONTH.FEB);
console.log(yearObj.CENTURY);
console.log(NEW_CENTURY);
console.log(ALL.CENTURY, ALL.default);

const a = () => {
    console.log("Abhishekkbndfl");
};

const AB = {};
console.log(AB.xyz?.abc);

const element = document.createElement("div");
element.innerText = "I am from File 1 - BLah blah lbkah";
document.body.appendChild(element);