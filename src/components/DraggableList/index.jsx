import React from 'react';
import PropTypes from 'prop-types';

import DraggableFlatList from 'react-native-draggable-dynamic-flatlist';

const DraggableList = ({ data, customListItem, reorderStateAfterDragging }) => (
  <DraggableFlatList
    scrollPercent={5}
    keyExtractor={(item) => `draggable-item-${item.name}`}
    data={data}
    onMoveEnd={({ updatedData }) => reorderStateAfterDragging(updatedData)}
    renderItem={({ item, move, moveEnd }) => React.cloneElement(
      customListItem,
      {
        ...customListItem.props, item, move, moveEnd,
      },
    )}
  />
);

DraggableList.propTypes = {
  data: PropTypes.arrayOf({}).isRequired,
  customListItem: PropTypes.node.isRequired,
  reorderStateAfterDragging: PropTypes.func.isRequired,
};

export default DraggableList;
