import {StyleSheet} from 'react-native';
import { deviceHeight, deviceWidth } from '../../assets/constants/Constants';

export default StyleSheet.create({
  Text: {
    fontSize: 24,
    color: 'black',
    fontWeight: '700',
  },
  Screen: {
    flex: 1,
    justifyContent:'flex-start',
    // backgroundColor: 'gray',
    alignItems: 'center',
    alignContent:'center',
  },
  SafeArea: {
    height:deviceHeight,
    width:deviceWidth,
    // alignItems: 'center',
    flex: 1,
  },
});
