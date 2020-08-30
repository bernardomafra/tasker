import React from 'react';

import DraggableFlatList from 'react-native-draggable-dynamic-flatlist';

const DraggableList = ({ data, customListItem, reorderStateAfterDragging }) => {
  return (
    <DraggableFlatList
      scrollPercent={5}
      keyExtractor={(item) => `draggable-item-${item.name}`}
      data={data}
      onMoveEnd={({ data }) => reorderStateAfterDragging(data)}
      renderItem={({ item, move, moveEnd }) =>
        React.cloneElement(customListItem, Object.assign({ ...customListItem.props }, { item, move, moveEnd }))}
    />
  )
}

export default DraggableList;