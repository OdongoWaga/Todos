import React from "react";

const TodosContext = React.createContext({
	todos: [
		{ id: 1, text: "Eat Breakfast", complete: false },
		{ id: 2, text: "Finish laundry", complete: false },
		{ id: 3, text: "Do Project", complete: true }
	],
	currentTodo: {}
});

export default TodosContext;
