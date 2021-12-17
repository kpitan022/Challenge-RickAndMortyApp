/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  Text: {
    fontSize: 24,
    color: 'black',
    fontWeight: '700',
  },
  Screen: {
    flex: 1,
    // backgroundColor: 'gray',
  },
  SafeArea: {
    alignItems: 'center',
    flex: 1,
  },
  Header: {
    color: 'white',
    // backgroundColor: 'green',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  Avatar: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 50,
    // padding: 2,
    alignItems: 'center',
    alignContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    flex: 1,
  },
  Btn: {
    paddingEnd: 30,
  },
  Body: {
    // backgroundColor: 'yellow',
    flex: 4,
  },
  Description: {
    padding: 8,
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 5,
  },
  Footer: {
    color: 'white',
    fontWeight: '300',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    borderTopWidth: 1,
    borderColor: 'gray',
  },
  touchbtn: {
    fontSize: 18,
    color: 'brown',
  },
  Card: {
    backgroundColor: '#d5d0d0',
    // height: 400,
    width: '100%',
    alignContent: 'center',
    padding: 10,
    borderRadius: 20,
    marginTop:10,    // flex: 1,
  },
});
