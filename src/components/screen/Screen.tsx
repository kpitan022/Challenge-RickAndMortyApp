import React from 'react';
import { SafeAreaView, StatusBar, View, ImageBackground, ScrollView } from 'react-native';
import { deviceHeight, deviceWidth, fondo,  } from '../../assets/constants/Constants';
import styles from './style';
//constantes 
const imagenPath = '../../assets/images/bg1.png'
const Screen = ({ children }: any) => {

  return (
    <>
      <SafeAreaView style={styles.SafeArea}>
        <StatusBar barStyle="light-content" backgroundColor={fondo} />
        <ImageBackground
          source={require(imagenPath)}
          style={{ width: deviceWidth, height:'100%' }}
          resizeMode='stretch'
        >
          {/* <ScrollView> */}
            <View style={styles.Screen} >{children}</View>
          {/* </ScrollView> */}
        </ImageBackground>
      </SafeAreaView>
    </>
  );
};
export default Screen;
