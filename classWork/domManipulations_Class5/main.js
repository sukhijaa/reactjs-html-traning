// there are 3 kinds of selectors for HTML elements - ID Selector, Class Selector, Tag Name Selector

// Returns a single element from the document
console.log(document.getElementById("parentDiv"));

// Returns a list of elements from the document in order of their appearance in document
console.log(document.getElementsByClassName("divClassName"));

// Returns a list of elements from the document in order of their appearance in document
console.log(document.getElementsByTagName("div"));

const parentDivElement = document.getElementById("parentDiv");
// Used to either add a new attribute, or modify existing attribute
parentDivElement.setAttribute("myNewName", "HTMLReact");
parentDivElement.setAttribute("myNewName", "Abhishek");
// Used to remove the attribute
parentDivElement.removeAttribute("myName");

let clickCount = 0;
let hoverCount = 0;

function hoverEvent(e) {
    console.log(this);
    // console.log("Child Hovered", e);
    const targetElement = e.target;
    // console.log(targetElement);
    targetElement.innerText += " Click Hover " + hoverCount++;
};

// Event Listeners must always implement a normal function and not a arrow function
function childClickHandler(e) {
    console.log("Child CLicked", e);
    const targetElement = e.target;
    console.log(targetElement);
    // targetElement.onmouseenter = hoverEvent;

    if (clickCount === 2) {
        targetElement.addEventListener("mouseenter", hoverEvent);
    } else if (clickCount === 10) {
        // Make sure to pass the same method reference here which was used for addEventListener
        targetElement.removeEventListener("mouseenter", hoverEvent);
    }
    targetElement.innerText += " Click Counter " + clickCount++;
};

// Create element of specified tagName
const newChildForParent = document.createElement("div");
newChildForParent.setAttribute("id", "newChildDiv");
newChildForParent.setAttribute("class", "divClassName");
newChildForParent.onclick = childClickHandler;

// Add text to the HTML Element
newChildForParent.innerText = "My name is Child";

// Completely ovverrides the content of the HTML Element. Use it very cautiously
newChildForParent.innerHTML = "<div class='grandChildDiv divClassName' id='grandChildDiv2'>I am the grandchild</div>"

// Add a child to the bottom of parentDivElement
parentDivElement.appendChild(newChildForParent);

// window.addEventListener("onre")

const formData = {};

function onChangeHandler(target) {
    // const target = e.target;
    let newValue = target.value;
    if (target.type === "checkbox") {
        newValue = target.checked;
    }
    const name = target.getAttribute("name");
    console.log(newValue, name);
    formData[name] = newValue;

    document.getElementsByName("ageFieldDisplay")[0].value = `${formData["ageField"]} Years`;
    if (formData.passwordField) {
        document.getElementsByName("passwordDisplay")[0].style.visibility = "visible";
        document.getElementsByName("passwordDisplay")[0].value = formData.passwordField;
    }
}

function handleMethodSubmit(e) {

    console.log(e);
}

document.getElementsByName("passwordDisplay")[0].style = {};
document.getElementsByName("passwordDisplay")[0].style.visibility = "hidden";

// Query Selector - If you want to use selectors similar to CSS Format
const myParentDivQuerySelected = document.querySelector("#parentDiv");
// For multiple matches, it always returns the first match
const myParentDivClassSelected = document.querySelector(".divClassName.parentDiv");
// For all matches,
const allDivClassNames = document.querySelectorAll(".divClassName");