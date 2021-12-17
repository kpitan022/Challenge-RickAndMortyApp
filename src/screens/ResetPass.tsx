import React, { useContext, useEffect, useState } from 'react';
import { Alert, TouchableOpacity, View, } from 'react-native';
import { supabase } from "../lib/supabaseClient";
import { Input, Text, Button, Divider, Image, Card } from 'react-native-elements';
import { MyCard, Screen } from '../components';
import { Auth } from '../provider/AuthProvider';
import { colorFuente, fondo, fondoClaro } from '../assets/constants/Constants';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const imagenPathBanner = '../assets/images/banner.png'


const ResetPass = ({ navigation }: any) => {

  const { logInOut }: any = useContext(Auth)
  const { auth }: any = useContext(Auth)


  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [correoOk, setCorreoOk] = useState(false)
  const [passOk, setPassOk] = useState(false)

  useEffect(() => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const mailOk = regex.test(String(email).toLowerCase());
    return mailOk ? setCorreoOk(true) : setCorreoOk(false)
  }, [email])

  useEffect(() => {
    const passValid = pass.length >= 6 ? true : false;
    return passValid ? setPassOk(true) : setPassOk(false)
  }, [pass])

  const handleResetPass = ()=>{
    const { data, error } = supabase.auth.api.resetPasswordForEmail(email,{redirectTo:'https://ricky-and-morty-web.vercel.app/resetpass'})
    if (!error) {
      Alert.alert(`Se ha enviado un correo a ${email} para reestablecer su contraseña`);
      navigation.navigate('Login')
  };
    if (error) Alert.alert(`${error.message}`)
    
  };

  const encabezado = () => {
    return (<>
      <Card.Title>
        <Image
          source={require(imagenPathBanner)}
          style={{ height: 88, width: 300, resizeMode: 'stretch' }}
        // PlaceholderContent={}
        />
      </Card.Title>
      <Card.Title><Text style={{ color: fondo,fontFamily: 'JetBrains',fontSize:44}}
      >
        Reset Password
      </Text></Card.Title></>
    )
  };

  const body = () => {
    return (<><Input
      // autoFocus={true}
      value={email}
      keyboardType='email-address'
      onChangeText={setEmail}
      label='Email'
      placeholder='email@address.com'
      errorMessage={(!correoOk) ? ('INVALID EMAIL ADDRESS') : ''}
      leftIcon={{
        type: 'material-community',
        name: 'email',
        color: fondo,
      }}
    />
      </>)
  };

  const footer = () => {
    return (
      <>
        <Button
          // onPress={() => logInOut ? logInOut() : null}
          onPress={handleResetPass}
          // onPress={() =>{Alert.alert('formulario valido consultar a la api')}}
          title="Reset Password"
          disabled={!correoOk}
          buttonStyle={{
            backgroundColor: fondo,
            borderWidth: 2,
            borderColor: fondoClaro,
            borderRadius: 30,
          }}
          containerStyle={{
            // width: '80%',                     
            marginHorizontal: 50,
            marginVertical: 10,
            justifyContent: 'center',
          }}
          titleStyle={{ fontFamily:'JetBrains' }}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('SingIn')}>
          <Text style={{ color: fondo ,fontFamily:'JetBrains'}}>No tiene cuenta Registrese</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}>
          <Text style={{ color: fondo ,fontFamily:'JetBrains'}}>Iniciar Sesion</Text>
        </TouchableOpacity>
        </>)
  }

  return (
    <KeyboardAwareScrollView  >
      <Screen>
      <View style={{ justifyContent:'center', alignItems:'center', alignContent:'center', flex:1 }}>
        <MyCard
          encabezado={encabezado()}
          body={body()}
          footer={footer()}
        />
        </View>
      </Screen>
    </KeyboardAwareScrollView>
  );
};

export default ResetPass;
