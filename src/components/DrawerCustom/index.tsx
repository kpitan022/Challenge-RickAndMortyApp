import React, { useContext, useLayoutEffect, useState } from "react";
import { View } from "react-native";
import { DrawerContentScrollView, DrawerItemList, } from '@react-navigation/drawer';
import { Button, Icon, Image, } from 'react-native-elements'
import { fondo, fondoClaro } from "../../assets/constants/Constants";
import { supabase } from "../../lib/supabaseClient";
import { Auth } from "../../provider/AuthProvider";


export default function CustomDrawerContent(props: any): JSX.Element {
  const { logInOut }: any = useContext(Auth)
  const salir =async () => {

    (await supabase.auth.signOut()) && logInOut ? logInOut(false) : null;

  }
  return (
    <View style={{ flex: 1, backgroundColor: fondo }}>

      <DrawerContentScrollView {...props} >
        <View style={{ alignItems: "center", justifyContent: 'center', width: "100%", height: 100 }} >
          <Image
            source={require('./ricky.png')}
            style={{ width: 100, height: 100, borderRadius: 50, }}
          // PlaceholderContent={}
          />
        </View>

        <DrawerItemList
          {...props}
          labelStyle={{ color: fondoClaro, fontFamily: 'JetBrains', }}
        />

      </DrawerContentScrollView>
      <View style={{ margin: 20 }}>
        <Button
          onPress={() => {salir()}}
          buttonStyle={{

            backgroundColor: fondo,
            borderRadius: 30,
            // padding:20
          }}

          // onPress={}
          iconPosition="left"
          icon={{ name: 'logout', color: fondoClaro }}
          title={'Cerrar Sesion'}
          titleStyle={{ color: fondoClaro, fontFamily: 'JetBrains', }}
        />
      </View>
    </View>
  );
}

