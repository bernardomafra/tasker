import React, { useContext } from 'react';
import {
  View, TextInput, Image, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import smallLogo from '../../public/assets/small-logo.png';

import DraggableList from '../../components/DraggableList';
import Task from '../../components/Task';

import TasksContext from '../../handlers/tasks';

import styles from './styles';

const TasksPage = ({ navigation }) => {
  const {
    handleAddTask,
    handleRemoveTask,
    handleEditTask,
    handleClearAllTasks,
    handleSetTaskAsChecked,
    handleTaskInputChange,
    handleStopEditting,
    keyboardRef,
    isTaskBeingEditted,
    newTask,
    tasksArray,
    setInTasksArray,
  } = useContext(TasksContext);

  return (
    <View style={styles().container}>
      <View style={styles().topBar}>
        <TouchableOpacity>
          <Icon
            onPress={() => navigation.navigate('HomePage')}
            name="arrow-left"
            color="white"
            size={30}
          />
        </TouchableOpacity>
        <Image source={smallLogo} style={styles().img} />
        <TouchableOpacity>
          <MaterialCommunityIcon
            onPress={handleClearAllTasks}
            name="broom"
            color="white"
            size={30}
          />
        </TouchableOpacity>
      </View>
      <View style={styles().listContainer}>
        <DraggableList
          data={tasksArray || []}
          customListItem={(
            <Task
              handleSetTaskAsChecked={handleSetTaskAsChecked}
              handleRemoveTask={handleRemoveTask}
              handleEditTask={handleEditTask}
            />
          )}
          reorderStateAfterDragging={setInTasksArray}
        />
      </View>
      <View style={styles().textContainer}>
        <TextInput
          ref={keyboardRef}
          style={styles(isTaskBeingEditted).inputNewTask}
          onChangeText={handleTaskInputChange}
          value={newTask?.name}
        />
        {isTaskBeingEditted
        && (
          <TouchableOpacity style={styles().button}>
            <Icon name="close" color="#FFFFFF" size={30} onPress={handleStopEditting} />
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles().button}>
          <Icon name={isTaskBeingEditted ? 'pencil' : 'plus'} color="#FFFFFF" size={30} onPress={handleAddTask} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

TasksPage.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default TasksPage;
