import React, { useState, useEffect, useContext } from "react";
import TodosContext from "../context";

const TodoForm = () => {
	const [todo, setTodo] = useState("");
	const {
		state: { currentTodo = {} },
		dispatch
	} = useContext(TodosContext);

	useEffect(() => {
		if (currentTodo.text) {
			setTodo(currentTodo.text);
		}
	}, [currentTodo.id]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (currentTodo.text) {
			dispatch({ type: "UPDATE_TODO", payload: todo });
		} else {
			dispatch({ type: "ADD_TODO", payload: todo });
		}

		setTodo("");
	};

	return (
		<form onSubmit={handleSubmit} className="flex justify-center">
			<input
				type="text"
				className="border-black border-solid border-2"
				onChange={(e) => setTodo(e.target.value)}
				value={todo}
			/>
		</form>
	);
};

export default TodoForm;
