import React, {
  createContext, useState, useEffect
} from 'react';

import { Alert, Keyboard } from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";

const TasksContext = createContext(null);

export const TasksProvider = ({ children }) => {
  const [newTask, setNewTask] = useState({ name: '' })
  const [tasksArray, setInTasksArray] = useState([])

  useEffect(() => {
    handleDataLoad();
  }, []);

  useEffect(() => {
    handleSaveData();
  }, [tasksArray]);


  async function handleDataLoad() {
    const tasks = await AsyncStorage.getItem("tasksArray");
    if (tasks) {
      setInTasksArray(JSON.parse(tasks));
    }
  }

  async function handleSaveData() {
    AsyncStorage.setItem("tasksArray", JSON.stringify(tasksArray));
  }

  async function handleAddTask() {
    const search = tasksArray.filter(task => task.name === newTask.name);

    if (search.length !== 0) {
      Alert.alert("Atenção", "Nome da tarefa repetido!");
      return;
    }

    setInTasksArray([...tasksArray, newTask]);
    setNewTask({ name: '' });
    Keyboard.dismiss();
  }

  async function handleRemoveTask(item) {
    Alert.alert(
      "Deletar Task",
      "Tem certeza que deseja remover esta anotação?",
      [
        {
          text: "Cancel",
          onPress: () => {
            return;
          },
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => setInTasksArray(tasksArray.filter(task => task.name !== item.name))
        }
      ],
      { cancelable: false }
    );
  }

  const handleSetTaskAsChecked = (clickedTaskName) => {
    const clicked = tasksArray.find(t => t.name === clickedTaskName)
    clicked.checked = !clicked.checked

    const newArray = tasksArray.map(task => task.name === clickedTaskName ? clicked : task)

    setInTasksArray(newArray)
  }

  const handleTaskInputChange = (text) => {
    setNewTask({ name: text, checked: false })
  }

  return (
    <TasksContext.Provider value={{
      handleAddTask,
      handleRemoveTask,
      handleSetTaskAsChecked,
      handleTaskInputChange,
      setInTasksArray,
      newTask,
      tasksArray
    }}>
      {children}
    </TasksContext.Provider >
  );

}

export default TasksContext;