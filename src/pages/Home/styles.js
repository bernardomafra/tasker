import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#52B267',
  },
  button: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    width: '50%',
    height: '7%',
    borderRadius: 40,
    padding: 20,
  },
  buttonText: {
    alignSelf: 'center',
    color: 'white',
    textTransform: 'uppercase',
    fontFamily: 'Cairo',
    fontWeight: '600',
    fontSize: 15,
  },
  listContainer: {
    flexGrow: 0,
    height: '70%',
    display: 'flex',
  },
  list: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  check: {
    marginRight: 10,
    color: 'rgba(0, 0, 0, 0.5)',
  },
});

export default styles;
