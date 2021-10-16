import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import Task from './components/Task'

export default function App() {
  const [task, setTask] = useState('');
  const [list, setList] = useState<string[]>([]);

  const handleAddTask = () => {
    if (task) {
      Keyboard.dismiss();
      setList([...list, task]);
      setTask('');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        All Tasks
      </Text>
      <View style={styles.tasksContainer}>
        {list.map((task, index) => <Task key={index + task} text={task} id={index} allTasks={list} setTasks={setList}/>)}
      </View>
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

  tasksContainer: {
    flex: 1,
    alignItems: 'center',
  },

  newTaskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 30
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
