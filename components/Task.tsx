import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface propsType {
    text: string,
    id: number,
    allTasks: string[],
    setTasks: React.Dispatch<React.SetStateAction<string[]>>
}

const Task = ({ text, id, allTasks, setTasks }: propsType) => {
    const [completed, setCompleted] = useState(false);

    const handleDelete=()=>{
        setTasks(allTasks.filter((task, index)=>index != id))
    }

    return (
        <View style={styles.taskContainer}>
            <Text style={styles.task}>
                {text}
            </Text>
            <TouchableOpacity onPress={()=>setCompleted((prev)=>!prev)}>
                <View style={completed ? styles.check : styles.uncheck}></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleDelete}>
                <Text style={styles.delete}>Delete</Text>
            </TouchableOpacity>
           
        </View>
    );
}

const styles = StyleSheet.create({
    taskContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        borderRadius: 50,
        padding: 16,
        marginBottom: 20,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.05,
        shadowRadius: 6,
    },

    task: {
        fontSize: 20,
        width: '80%',
        padding: 10
    },

    check: {
        height: 24,
        width: 24,
        borderRadius: 50,
        opacity: 0.35,
        backgroundColor: 'green',
        marginRight: 4
    },

    uncheck: {
        height: 24,
        width: 24,
        borderRadius: 50,
        opacity: 0.35,
        backgroundColor: 'gray',
        marginRight: 4
    },

    delete: {
        fontSize: 10,
        padding: 5, 
        color: 'red'
    }
});

export default Task