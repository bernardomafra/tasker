import React, {
  createContext, useState, useEffect, useRef,
} from 'react';
import PropTypes from 'prop-types';
import { Alert, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const TasksContext = createContext(null);

export const TasksProvider = ({ children }) => {
  const [newTask, setNewTask] = useState({ name: '', checked: false, id: 0 });
  const [tasksArray, setInTasksArray] = useState([]);
  const [isTaskBeingEditted, setIsTaskBeingEditted] = useState(false);
  const [idCounter, setIdCounter] = useState(0);
  const keyboardRef = useRef();

  async function handleDataLoad() {
    const tasks = await AsyncStorage.getItem('tasksArray');
    if (tasks) {
      setInTasksArray(JSON.parse(tasks));
    }
  }

  async function handleSaveData() {
    AsyncStorage.setItem('tasksArray', JSON.stringify(tasksArray));
  }

  useEffect(() => {
    handleDataLoad();
  }, []);

  useEffect(() => {
    handleSaveData();
  }, [tasksArray]);

  async function handleAddTask() {
    const search = tasksArray.filter((task) => task.name === newTask.name);

    if (search.length !== 0) {
      Alert.alert('Atenção', 'Nome da tarefa repetido!');
      return;
    }

    if (isTaskBeingEditted) {
      const newTasks = tasksArray.reduce((prev, curr) => [
        ...prev,
        {
          ...curr,
          name: curr.id === newTask.id ? newTask.name : curr.name,
        },
      ], []);
      setInTasksArray(newTasks);
      return;
    }

    setIdCounter((prev) => prev + 1);
    newTask.id = idCounter;
    setInTasksArray([...tasksArray, newTask]);
    setNewTask({ name: '', checked: false, id: 0 });
    setIsTaskBeingEditted(false);
    Keyboard.dismiss();
  }

  async function handleRemoveTask(item) {
    Alert.alert(
      'Deletar Task',
      'Tem certeza que deseja remover esta anotação?',
      [
        {
          text: 'Cancel',
          onPress: () => {

          },
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            setInTasksArray(
              tasksArray.filter((task) => task.name !== item.name),
            );
          },
        },
      ],
      { cancelable: false },
    );
  }

  const handleEditTask = (task) => {
    setIsTaskBeingEditted(true);
    setNewTask(task);
    keyboardRef.current.focus();
  };

  const handleStopEditting = () => {
    setIsTaskBeingEditted(false);
    setNewTask({ name: '', checked: false, id: 0 });
    setIsTaskBeingEditted(false);
    Keyboard.dismiss();
  };

  const handleClearAllTasks = () => {
    if (!tasksArray.length) {
      return;
    }

    Alert.alert(
      'Limpar lista',
      'Tem certeza que deseja remover todas as tarefas ?',
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Ok',
          onPress: () => {
            setInTasksArray([]);
            setNewTask({ name: '', checked: false, id: 0 });
            AsyncStorage.clear();
          },
        },
      ],
      { cancelable: false },
    );
  };

  const handleSetTaskAsChecked = (clickedTaskName) => {
    const clicked = tasksArray.find((t) => t.name === clickedTaskName);
    clicked.checked = !clicked.checked;

    const newArray = tasksArray.map((task) => (task.name === clickedTaskName ? clicked : task));

    setInTasksArray(newArray);
  };

  const handleTaskInputChange = (text) => {
    let task = { name: text, checked: false, id: idCounter };
    if (isTaskBeingEditted) {
      task = { name: text, checked: false, id: newTask.id };
    }

    setNewTask(task);
  };

  return (
    <TasksContext.Provider
      value={{
        handleAddTask,
        handleRemoveTask,
        handleSetTaskAsChecked,
        handleTaskInputChange,
        handleStopEditting,
        setInTasksArray,
        handleEditTask,
        handleClearAllTasks,
        setIsTaskBeingEditted,
        isTaskBeingEditted,
        keyboardRef,
        newTask,
        tasksArray,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

TasksContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TasksContext;
