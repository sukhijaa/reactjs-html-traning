document.getElementById("person1Chat").addEventListener("submit", handleTextSubmit);
document.getElementById("person2Chat").addEventListener("submit", handleTextSubmit);
const chatWrapper = document.getElementById("chatWrapper");

const CHAT_PEOPLE = {
    PERSON1: "person1",
    PERSON2: "person2"
};

const CHAT_FORMS = {
    [CHAT_PEOPLE.PERSON1]: document.querySelector("#person1Chat input[type='text']"),
    [CHAT_PEOPLE.PERSON2]: document.querySelector("#person2Chat input[type='text']")
};

const CHAT_DATA = {
    [CHAT_PEOPLE.PERSON1]: "",
    [CHAT_PEOPLE.PERSON2]: ""
};

CHAT_FORMS[CHAT_PEOPLE.PERSON1].focus();


const get2DValue = (val) => (val + "").length === 1 ? '0' + val : '' + val;

const getCurrentDateFormatted = () => {
    const date = new Date();
    return `${get2DValue(date.getHours())} : ${get2DValue(date.getMinutes() % 10)}`;
};

function getChatBox(chatMessage, chatPerson) {
    const chatBox = document.createElement("div");
    chatBox.className = `chat-box ${chatPerson}-chat`;
    chatBox.innerHTML =
        `<div class="chat-content">
            ${chatMessage}
        </div>
        <div class="time-arrow-wrapper">
            <div class="chat-timestamp">
                ${getCurrentDateFormatted()}
            </div>
            <div class="chat-arrow"></div>
        </div>`;

    return chatBox;
}

function handleTextChange(target) {
    const {name, value} = target;
    CHAT_DATA[name] = value;
}

function handleTextSubmit(e) {
    e.preventDefault();
    const {target} = e;
    const {name: chatPerson} = target;
    if (CHAT_DATA[chatPerson]) {
        const newElement = getChatBox(CHAT_DATA[chatPerson], chatPerson);
        chatWrapper.appendChild(newElement);

        newElement.scrollIntoView(false);

        const otherPerson = chatPerson === CHAT_PEOPLE.PERSON1 ? CHAT_PEOPLE.PERSON2 : CHAT_PEOPLE.PERSON1;

        const inputElement = CHAT_FORMS[chatPerson];
        inputElement.value = "";

        const otherElement = CHAT_FORMS[otherPerson];
        otherElement.focus();
    }
}