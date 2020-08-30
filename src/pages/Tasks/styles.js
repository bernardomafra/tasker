import { StyleSheet } from 'react-native';

const styles = (checked) => StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar: {
    backgroundColor: "#52B267",
    height: 70,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingLeft: 10,
    paddingRight: 25,
  },
  img: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  listContainer: {
    flex: 1,
  },
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
  button: {
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9bbfa3",
    borderRadius: 4,
    marginLeft: 10
  },
  buttonText: {
    alignSelf: "center",
    color: "white",
    fontFamily: "Cairo",
    fontWeight: "600"
  },
  taskDone: {
    color: 'gray',
    paddingRight: 10,
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  textContainer: {
    padding: 0,
    marginLeft: 10,
    marginRight: 10,
    height: 60,
    justifyContent: "center",
    alignSelf: "stretch",
    flexDirection: "row",
    paddingTop: 13,
    borderTopWidth: 1,
    borderColor: "#eee",
  },
  inputNewTask: {
    flex: 1,
    height: 40,
    backgroundColor: "#e3e3e3",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#e3e3e3"
  }
});

export default styles;