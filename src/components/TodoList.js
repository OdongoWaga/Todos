import React, { useContext } from "react";
import TodosContext from "../context";

export default function TodoList() {
	const { state } = useContext(TodosContext);
	const title= state.todos.length >0 ?
	`$`
	return (
		<div>
			<ul>
				{state.todos.map((todo) => (
					<li key={todo.id}>
						<span>{todo.text} </span>
					</li>
				))}
			</ul>
		</div>
	);
}
