import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Personajes from '../screens/Personajes';
import Lugares from '../screens/Lugares';
import Episodios from '../screens/Episodios';
import { Icon } from 'react-native-elements';

//constantes
import { fondo, fondoClaro, fondoActivo } from '../assets/constants/Constants';

const Tab = createBottomTabNavigator();

function Bottom() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: fondo,
        inactiveTintColor: fondoClaro,
        activeBackgroundColor: fondoActivo,
        inactiveBackgroundColor: fondo,
        labelPosition: 'below-icon',
        allowFontScaling:true,
        
        

        labelStyle: {
          fontSize: 12,
          fontFamily: 'JetBrains',
        }
      }}
    >
      <Tab.Screen name="Personajes" component={Personajes} options={{
        tabBarIcon: () => <Icon
          name="account-supervisor-circle"
          type="material-community"
          size={24}
          color={fondoClaro} tvParallaxProperties={undefined}
        />
      }} />
      <Tab.Screen name="Lugares" component={Lugares} options={{
        tabBarIcon: () => <Icon
          name="map-marker"
          type="material-community"
          size={24}
          color={fondoClaro} tvParallaxProperties={undefined}
        />
      }} />
      <Tab.Screen name="Episodios" component={Episodios} options={{
        tabBarIcon: () => <Icon
          name="television-classic"
          type="material-community"
          size={24}
          color={fondoClaro} tvParallaxProperties={undefined}/>
      }}
      />
    </Tab.Navigator>
  );
}
export default Bottom