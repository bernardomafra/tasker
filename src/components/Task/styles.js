import { StyleSheet } from 'react-native';

const styles = (checked) => StyleSheet.create({
  iconsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  trash: {
    marginLeft: 20,
  },
  done: {
    marginLeft: 20,
  },
  listItem: {
    borderRadius: 10,
    margin: 10,
    flex: 1,
    flexDirection: "row",
    padding: 15,
    backgroundColor: `${checked ? '#8dcc9a' : "#52B267"}`,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 5,
  },
  listText: {
    paddingBottom: 0,
    marginBottom: 0,
    fontSize: 17,
    alignSelf: "center",
    flex: 1,
    color: "white",
    textDecorationLine: `${checked ? 'line-through' : 'none'}`
  },
  taskDone: {
    color: 'gray',
    paddingRight: 10,
    alignSelf: 'center',
    fontWeight: 'bold'
  },
});

export default styles;