
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { Home } from "./StackRoutes";
import Bottom from './Bottom';
import DrawerComponent from '../components/DrawerCustom'
import { Info, LogOut } from './StackRoutes';




const Drawer = createDrawerNavigator();
const DrawerScreen = ({navigation}:any) => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerComponent{...props} />}
      // initialRouteName='Home'
    // headerMode='screen'
    >
      <Drawer.Screen name='Explora La serie' component={Bottom} />
      <Drawer.Screen name='Salir' component={LogOut} />
      <Drawer.Screen name='Info' component={Info} />

    </Drawer.Navigator>
  )
}

export default DrawerScreen
