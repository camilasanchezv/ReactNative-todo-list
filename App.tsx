import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import Task from './components/Task'

declare global {
  interface TaskType{
    text: string,
    completed: boolean
  }
}

export default function App() {
  const [task, setTask] = useState('');
  const [list, setList] = useState<TaskType[]>([]);

  const handleAddTask = () => {
    if (task) {
      Keyboard.dismiss();
      setList([...list, {text: task, completed: false}]);
      setTask('');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        All Tasks
      </Text>
      <ScrollView>
        {list.map((task, index) => <Task key={index + task.text} task={task} id={index} allTasks={list} setTasks={setList}/>)}
      </ScrollView>
      <KeyboardAvoidingView style={styles.newTaskContainer}>
        <TextInput style={styles.input} placeholder="New task" value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={handleAddTask}>
          <View style={styles.addButton}>
            <Text>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfdfd',
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 21,
    textAlign: 'center',
    marginBottom: 20,
  },

  newTaskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 30,
    paddingTop: 30
  },

  input: {
    width: 280,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 16,
    marginBottom: 20,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    fontSize: 20
  },

  addButton: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#fff',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  }

});
