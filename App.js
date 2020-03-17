import React,{useState} from "react";
import { StyleSheet, Text, View, Button, TextInput, FlatList } from "react-native";
import Header from "./Components/Header"
import TodoItems from "./Components/TodoItems";
export default function App() {

  const [todos, setTodos] = useState([
    { text: "buy Coffee", key: "1" },
    { text: "Create an App", key: "2" }, 
    { text: "Sleeeeep", key: "3" }
  ])
  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todos=>todos.key!=key)
    })
  }
	return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItems item={item} presshandler={pressHandler}/>
            )}
            
            />
        </View>
        </View>
    </View>
    
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
    backgroundColor: "white",
	},
	content: {
		
	},
	
  content: {
    padding: 40
  },
  list: {
    marginTop:20
  }
});
