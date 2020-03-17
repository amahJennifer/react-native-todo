import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import AddTodo from "../Components/AddTodo";

test("examples of some things", async () => {
	const { queryByTestId } = render(<AddTodo />);
	const addTodoButton = queryByTestId("add-todo");
	expect(addTodoButton).toBeTruthy();
});
