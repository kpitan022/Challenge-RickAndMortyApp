import React, { useContext, useEffect, useState } from 'react';
import { Alert, TouchableOpacity, View, } from 'react-native';
import { supabase } from "../lib/supabaseClient";
import { Input, Text, Button, Divider, Image, Card } from 'react-native-elements';
import { MyCard, Screen } from '../components';
import { Auth } from '../provider/AuthProvider';
import { colorFuente, fondo, fondoClaro } from '../assets/constants/Constants';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const imagenPathBanner = '../assets/images/banner.png'


const LoginScreen = ({ navigation }: any) => {

  const { logInOut }: any = useContext(Auth)
  const { auth }: any = useContext(Auth)


  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [mostrar, setMostrar] = useState(true);
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

  const handleSignIn = async () => {
    const { user, session, error } = await supabase.auth.signIn({
      email,
      password: pass,
    });
    if (error) {
      throw error && Alert.alert(`${error.message} `);
    }
    if (session) { logInOut(true) & Alert.alert(`logeado como ${user.email} `) }
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
        Login
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
      <Input
        value={pass}
        onChangeText={setPass}
        label='Password'
        placeholder="Password"
        secureTextEntry={mostrar}
        errorStyle={{ color: 'red' }}
        errorMessage={(!passOk) ? ('MUST BE MORE THAN 6 CHARACTERS') : ''}
        rightIcon={{
          color: fondo,
          type: 'material-community',
          name: mostrar ? 'eye' : 'eye-off',
          onPress: () => { { setMostrar(!mostrar) } },
        }}
        leftIcon={{
          color: fondo,
          type: 'material-community',
          name: 'lock'
        }}
      /></>)
  };

  const footer = () => {
    return (
      <>
        <Button
          // onPress={() => logInOut ? logInOut() : null}
          onPress={handleSignIn}
          // onPress={() =>{Alert.alert('formulario valido consultar a la api')}}
          title="LOG IN"
          disabled={!correoOk || !passOk}
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
        <TouchableOpacity onPress={() => navigation.navigate('SingIn')}>
          <Text style={{ color: fondo ,fontFamily:'JetBrains'}}>No tiene cuenta Registrese</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Reset')}>
          <Text style={{ color: fondo ,fontFamily:'JetBrains'}}>Recuperar Password</Text>
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

export default LoginScreen;
