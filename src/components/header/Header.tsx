import React from "react";
import { Header } from "react-native-elements";
import { fondoClaro, fondo } from "../../assets/constants/Constants";


const myHeader = ({title,navigation}:any) => {
  return (
    <Header
      leftComponent={{ icon: 'menu', color: fondoClaro, onPress: () => navigation.openDrawer() }}
      centerComponent={{ text: title, style: { color: fondoClaro, fontSize: 15, fontFamily:"JetBrains" } }}
      rightComponent={{ icon: 'home', color: fondoClaro, onPress: () => navigation.navigate('Explora La serie') }}
      // para rightComponent onPress:() => navigation.goBack()
      containerStyle={{
        backgroundColor: fondo,
        justifyContent: 'space-around',
      }}
      statusBarProps={{ barStyle: 'light-content', backgroundColor: fondo }}

    />
  )
}

export default myHeader

