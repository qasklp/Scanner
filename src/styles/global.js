import { StyleSheet } from 'react-native'

export const globalStyles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    justifyContent: "flex-start",
  },
  container: {
    margin: 20,
    flex: 1,
    justifyContent: "flex-start",
    // backgroundColor: '#f00',
  },
  textColor: {
    color: '#fff'
  },
  bgColor: {
    backgroundColor: '#504cac'
  },
  bgColorLight: {
    backgroundColor: '#504cacb0'
  },
  headerTitle: {
    color: 'white'
  },
  header: {
    backgroundColor: '#504cac',
    color: 'white'
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
});