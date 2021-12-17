import React, { useContext } from "react";
import {  Login, SingIn,Drawer, Personaje, Episodio, Lugar, LogOut, ResetPass } from "./StackRoutes";
import { Auth } from '../provider/AuthProvider';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

const MyStack = () => {
  const { auth }: any = useContext(Auth)
  return (
    <NavigationContainer>
      <Stack.Navigator  headerMode='none' >
        {auth ?<>
        <Stack.Screen name="Drawer" component={Drawer} />
        <Stack.Screen name="Salir" component={LogOut} />
        <Stack.Screen name="Personaje" component={Personaje} />
        <Stack.Screen name="Episodio" component={Episodio} />
        <Stack.Screen name="Lugar" component={Lugar} />
        
        </>
        :<>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SingIn" component={SingIn} />
        <Stack.Screen name="Reset" component={ResetPass} />
        
        </>}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;