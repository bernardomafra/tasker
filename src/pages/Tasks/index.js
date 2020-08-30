import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, Animated, Alert, Text, Image, TouchableOpacity, Keyboard } from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";
import smallLogo from '../../public/assets/small-logo.png'
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';
import DraggableFlatList from 'react-native-draggable-dynamic-flatlist'

const TasksPage = ({ navigation }) => {
  const [newTask, setNewTask] = useState({ key: '' })
  const [tasksArray, setInTasksArray] = useState([])

  async function addTask() {
    const search = tasksArray.filter(task => task.key === newTask.key);

    if (search.length !== 0) {
      Alert.alert("Atenção", "Nome da tarefa repetido!");
      return;
    }

    setInTasksArray([...tasksArray, newTask]);
    setNewTask({ key: '' });

    Keyboard.dismiss();
  }

  async function removeTask(item) {
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
          onPress: () => setInTasksArray(tasksArray.filter(tasks => tasks !== item))
        }
      ],
      { cancelable: false }
    );
  }

  const handleSetTaskAsChecked = (clickedTaskKey) => {
    const clicked = tasksArray.find(t => t.key === clickedTaskKey)
    clicked.checked = !clicked.checked

    const newArray = tasksArray.map(task => task.key === clickedTaskKey ? clicked : task)

    setInTasksArray(newArray)
  }

  useEffect(() => {
    async function carregaDados() {
      const tasks = await AsyncStorage.getItem("tasksArray");
      if (tasks) {
        setInTasksArray(JSON.parse(tasks));
      }
    }
    carregaDados();
  }, []);

  useEffect(() => {
    async function salvaDados() {
      AsyncStorage.setItem("tasksArray", JSON.stringify(tasksArray));
    }
    salvaDados();
  }, [tasksArray]);

  return (
    <View style={styles().container}>
      <View style={styles().topBar}>
        <TouchableOpacity >
          <Icon onPress={() => navigation.navigate('HomePage')} name="arrow-left" color="white" size={20} />
        </TouchableOpacity>
        <Image source={smallLogo} style={styles().img} />
      </View>
      <View style={styles().listContainer}>
        <DraggableFlatList
          scrollPercent={5}
          keyExtractor={(item) => `draggable-item-${item.key}`}
          data={tasksArray}
          onMoveEnd={({ data }) => setInTasksArray(data)}
          renderItem={({ item, move, moveEnd }) => (
            <TouchableOpacity
              style={styles(item?.checked).listItem}
              onLongPress={move}
              onPressOut={moveEnd}
            >
              {item?.checked && <Text style={styles().taskDone}>[DONE]</Text>}
              <Text style={styles(item?.checked).listText}>{item.key}</Text>
              <View style={styles().iconsContainer}>
                <Icon name={item?.checked ? "check-square" : "square-o"} size={30} color="#FFFFFF" style={styles().done} onPress={() => handleSetTaskAsChecked(item.key)} />
                <Icon name="trash" size={30} color="#FFFFFF" style={styles().trash} onPress={() => removeTask(item)} />
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={styles().textContainer}>
        <TextInput style={styles().inputNewTask} onChangeText={text => setNewTask({ key: text, checked: false })}
          value={newTask?.key} />
        <TouchableOpacity style={styles().button} >
          <Icon name="plus" color="#FFFFFF" size={30} onPress={addTask} />
        </TouchableOpacity>
      </View>
    </View >
  )
}


export default TasksPage;