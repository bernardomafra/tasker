import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#52B267"
  },
  button: {
    backgroundColor: "#000000",
    width: "80%",
    padding: 20
  },
  buttonText: {
    alignSelf: "center",
    color: "white",
    fontFamily: "Cairo",
    fontWeight: "600"
  },
  listContainer: {
    flexGrow: 0,
    height: "40%"
  },
  list: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "center"
  },
  check: {
    marginRight: 10,
    color: "rgba(0, 0, 0, 0.5)"
  }
});

export default styles;