import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Alert } from 'react-native';

const StudentRecordsApp = () => {
  const [name, setName] = useState('');
  const [gpa, setGPA] = useState('');
  const [students, setStudents] = useState([]);

  const addStudent = () => {
    if (name.trim() === '' || gpa.trim() === '') {
      Alert.alert('Error', 'Please enter both name and GPA');
      return;
    }
    setStudents([...students, { id: Math.random().toString(), name, gpa }]);
    setName('');
    setGPA('');
  };

  const deleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  const searchStudent = (query) => {
    const result = students.filter(student => student.name.toLowerCase().includes(query.toLowerCase()));
    return result;
  };

  const renderStudentItem = ({ item }) => (
    <View style={styles.studentItem}>
      <Text style={styles.studentName}>{item.name}</Text>
      <Text style={styles.studentGPA}>GPA: {item.gpa}</Text>
      <TouchableOpacity style={styles.deleteButton} onPress={() => deleteStudent(item.id)}>
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter student name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter GPA"
          value={gpa}
          onChangeText={setGPA}
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.addButton} onPress={addStudent}>
          <Text style={styles.addButtonText}>Add Student</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search by name"
          onChangeText={(text) => {
            // Perform search
            const result = searchStudent(text);
            // Do something with the search result
          }}
        />
      </View>
      <FlatList
        data={students}
        renderItem={renderStudentItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  formContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  searchContainer: {
    marginBottom: 20,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  studentItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  studentName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  studentGPA: {
    fontSize: 14,
    color: '#888',
  },
  deleteButton: {
    backgroundColor: 'red',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: '#fff',
  },
});

export default StudentRecordsApp;
