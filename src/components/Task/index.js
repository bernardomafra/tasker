import React from 'react';

import { TouchableOpacity, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles'

const Task = ({ item, move, moveEnd, handleSetTaskAsChecked, handleRemoveTask }) => {
  return (
    <TouchableOpacity
      style={styles(item?.checked).listItem}
      onLongPress={move}
      onPressOut={moveEnd}
    >
      {item?.checked && <Text style={styles().taskDone}>[DONE]</Text>}
      <Text style={styles(item?.checked).listText}>{item.name}</Text>
      <View style={styles().iconsContainer}>
        <Icon name={item?.checked ? "check-square" : "square-o"} size={30} color="#FFFFFF" style={styles().done} onPress={() => handleSetTaskAsChecked(item.name)} />
        <Icon name="trash" size={30} color="#FFFFFF" style={styles().trash} onPress={() => handleRemoveTask(item)} />
      </View>
    </TouchableOpacity>
  )
}

export default Task