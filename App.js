import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Button,
	TextInput,
	FlatList
} from "react-native";
import Header from "./Components/Header";
import TodoItems from "./Components/TodoItems";
import AddTodo from "./Components/AddTodo";
export default function App() {
	const [todos, setTodos] = useState([
		{ text: "buy Coffee", key: "1" },
		{ text: "Create an App", key: "2" },
		{ text: "Sleeeeep", key: "3" }
	]);
	const pressHandler = key => {
		setTodos(prevTodos => {
			return prevTodos.filter(todos => todos.key != key);
		});
  };
  
	const submitHandler = text => {
    console.log(text);
    setTodos(previousTodos =>
			previousTodos.concat({
				text,
				key: Math.random().toString(),
			})
		);
	};

	const todoList = todos.map(todo => {
		return <Text key={todo.key}>{todo.text}</Text>;
	});

	return (
		<View style={styles.container}>
			<Header />
			<View style={styles.content}>
				<AddTodo submitHandler={submitHandler} />
				<View style={styles.list}>{todoList}</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white"
	},
	content: {},

	content: {
		padding: 40
	},
	list: {
		marginTop: 20
	}
});
