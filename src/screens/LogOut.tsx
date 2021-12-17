import React, { useContext } from 'react'
import { View } from 'react-native'
import { Button,  Card,  Image,  Text } from 'react-native-elements'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { fondo, fondoClaro } from '../assets/constants/Constants'
import { Screen, Header, MyCard } from '../components'
import { supabase } from '../lib/supabaseClient'
import { Auth } from '../provider/AuthProvider'

const imagenPathBanner = '../assets/images/banner.png'


const LogOut = ({ navigation }: any) => {

  // const { auth }: any = useContext(Auth)
  const { logInOut }: any = useContext(Auth)
  const encabezado = () => {
    return (<>
      <Card.Title>
        <Image
          source={require(imagenPathBanner)}
          style={{ height: 88, width: 300, resizeMode: 'stretch' }}
        // PlaceholderContent={}
        />
      </Card.Title>
      <Card.Title><Text style={{ color: fondo,fontFamily: 'JetBrains',fontSize:30}}
      >
        Cerrar sesion?
      </Text></Card.Title></>
    )
  };
  const footer = () => {
    return (
      <>
        <Button
        onPress={async () => {
          (await supabase.auth.signOut()) && logInOut ? logInOut(false) : null;
        }}
        iconPosition="left"
        icon={{ name: 'logout', color: fondoClaro, }}
        title={'Salir'}
        buttonStyle={{
          backgroundColor: fondo,
          borderRadius: 30,
        }}
      />
        </>)
  }

  return (<>
      <Header title={'Logout'} navigation={navigation} />
      <KeyboardAwareScrollView  >
      <Screen>
      <View style={{ justifyContent:'center', alignItems:'center', alignContent:'center', flex:1 }}>
        <MyCard
          encabezado={encabezado()}
          footer={footer()}
        />
        </View>
      </Screen>
    </KeyboardAwareScrollView></>
  )
}

export default LogOut
