const initialState = [
    {
        initials: "G",
        description: "Groceries",
        id: 0,
        details: [
            "This is my Groceries ToDo Task 1",
            "This is my GroceriesToDo Task 2",
            "This is my Groceries ToDo Task 3",
            "This is my Groceries ToDo Task 4",
            "This is my Groceries ToDo Task 5",
            "This is my Groceries ToDo Task 6",
            "This is my Groceries ToDo Task 7",
            "This is my Groceries ToDo Task 8",
            "This is my Groceries ToDo Task 9"
        ]
    },
    {
        initials: "BP",
        description: "Bill Payments",
        id: 1,
        details: [
            "This is my Bill Payments Todo Task 1",
            "This is my Bill Payments Todo Task 2",
            "This is my Bill Payments Todo Task 3",
            "This is my Bill Payments Todo Task 4",
            "This is my Bill Payments Todo Task 5",
            "This is my Bill Payments Todo Task 6",
            "This is my Bill Payments Todo Task 7",
            "This is my Bill Payments Todo Task 8",
            "This is my Bill Payments Todo Task 9"
        ]
    },
    {
        initials: "E",
        description: "Exercises",
        id: 2,
        details: [
            "This is my Exercises Todo Task 1",
            "This is my Exercises Todo Task 2",
            "This is my Exercises Todo Task 3",
            "This is my Exercises Todo Task 4",
            "This is my Exercises Todo Task 5",
            "This is my Exercises Todo Task 6",
            "This is my Exercises Todo Task 7",
            "This is my Exercises Todo Task 8",
            "This is my Exercises Todo Task 9"
        ]
    }
];

const todoReducer = (state = initialState, action) => {
    // console.log("Action recieved for todoReducer", action, state);
    const newStore = {...state, newState: action.type};
    return newStore;
};

export default todoReducer;