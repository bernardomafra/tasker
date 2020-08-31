import React from 'react';
import PropTypes from 'prop-types';

import { TouchableOpacity, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const Task = ({
  item, move, moveEnd, handleSetTaskAsChecked, handleRemoveTask,
}) => (
  <TouchableOpacity
    style={styles(item?.checked).listItem}
    onLongPress={move}
    onPressOut={moveEnd}
  >
    {item?.checked && <Text style={styles().taskDone}>[DONE]</Text>}
    <Text style={styles(item?.checked).listText}>{item.name}</Text>
    <View style={styles().iconsContainer}>
      <Icon name="pencil" size={30} color="#FFFFFF" />
      <Icon name={item?.checked ? 'check-square' : 'square-o'} size={30} color="#FFFFFF" style={styles().done} onPress={() => handleSetTaskAsChecked(item.name)} />
      <Icon name="trash" size={30} color="#FFFFFF" style={styles().trash} onPress={() => handleRemoveTask(item)} />
    </View>
  </TouchableOpacity>
);

Task.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
  }),
  move: PropTypes.func,
  moveEnd: PropTypes.func,
  handleSetTaskAsChecked: PropTypes.func.isRequired,
  handleRemoveTask: PropTypes.func.isRequired,
};

Task.defaultProps = {
  item: {
    name: '',
    checked: false,
  },
  move: () => {},
  moveEnd: () => {},
};

export default Task;
