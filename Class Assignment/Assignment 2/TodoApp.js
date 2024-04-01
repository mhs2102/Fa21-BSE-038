import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet, Text } from 'react-native';

const TodoApp = () => {
  const [textInput, setTextInput] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (textInput.trim() !== '') {
      setTodos([...todos, { id: Math.random().toString(), text: textInput }]);
      setTextInput('');
    }
  };

  const handleDeleteTodo = id => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>To-Do List</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a new todo"
        value={textInput}
        onChangeText={setTextInput}
      />
      <Button title="Add" onPress={handleAddTodo} />
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text>{item.text}</Text>
            <Button title="Delete" onPress={() => handleDeleteTodo(item.id)} />
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 10
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 10
  }
});

export default TodoApp;
