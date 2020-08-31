import React, { useContext } from 'react';
import {
  View, TextInput, Image, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/FontAwesome';
import smallLogo from '../../public/assets/small-logo.png';

import DraggableList from '../../components/DraggableList';
import Task from '../../components/Task';

import TasksContext from '../../handlers/tasks';

import styles from './styles';

const TasksPage = ({ navigation }) => {
  const {
    handleAddTask,
    handleRemoveTask,
    handleSetTaskAsChecked,
    handleTaskInputChange,
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
            size={20}
          />
        </TouchableOpacity>
        <Image source={smallLogo} style={styles().img} />
      </View>
      <View style={styles().listContainer}>
        <DraggableList
          data={tasksArray || []}
          customListItem={(
            <Task
              handleSetTaskAsChecked={handleSetTaskAsChecked}
              handleRemoveTask={handleRemoveTask}
            />
          )}
          reorderStateAfterDragging={setInTasksArray}
        />
      </View>
      <View style={styles().textContainer}>
        <TextInput
          style={styles().inputNewTask}
          onChangeText={handleTaskInputChange}
          value={newTask?.name}
        />
        <TouchableOpacity style={styles().button}>
          <Icon name="plus" color="#FFFFFF" size={30} onPress={handleAddTask} />
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
