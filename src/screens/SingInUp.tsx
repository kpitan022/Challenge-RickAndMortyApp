import React, { useContext, useEffect, useState } from 'react';
import { Alert, TouchableOpacity, View } from 'react-native';
import { Input, Text, Button, Card, Image } from 'react-native-elements';
import { MyCard, Screen } from '../components';
import { Auth } from '../provider/AuthProvider';
import { supabase } from '../lib/supabaseClient';
import { fondo, fondoClaro } from '../assets/constants/Constants';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const imagenPathBanner = '../assets/images/banner.png'


const signInScreen = ({ navigation }: any) => {

  const { logInOut }: any = useContext(Auth)
  const { auth }: any = useContext(Auth)


  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [passConfirm, setPassConfirm] = useState('');
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

  const handleSignInUp = async () => {
    const { user, session, error } = await supabase.auth.signUp({
      email,
      password: pass,
    },{redirectTo:'https://ricky-and-morty-web.vercel.app/welcome'});
    if (error) {
      throw error && Alert.alert(`${error.message}`);
    }
    // TODO acomodar mensaje
    // if (user) {
    //   Alert.alert(`Fue registrado con exito con: ${user.email} `) && setUser(`${user.email}`) ;
    // }
    // session ? setLogeado(true) : setLogeado(false);
    Alert.alert(`Se envio un correo a  ${user.email} para validar su cuenta`)
    navigation.navigate('Login')
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
      <Card.Title><Text style={{ color: fondo,fontFamily: 'JetBrains',fontSize:40}}
      >
        Registrarse
      </Text></Card.Title></>
    )
  };
  const body = () => {
    return (
      <><Input
        autoFocus={true}
        value={email}
        keyboardType='email-address'
        onChangeText={setEmail}
        label='Email'
        placeholder='email@address.com'
        errorMessage={(!correoOk) ? ('INVALID EMAIL ADDRESS') : ''}
        leftIcon={{
          type: 'material-community',
          name: 'email'
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
            type: 'material-community',
            name: mostrar ? 'eye' : 'eye-off',
            onPress: () => { { setMostrar(!mostrar) } },
          }}
          leftIcon={{
            type: 'material-community',
            name: 'lock'
          }}
        />
        <Input
          value={passConfirm}
          onChangeText={setPassConfirm}
          label='Confirm Password'
          placeholder="Password"
          secureTextEntry={mostrar}
          errorStyle={{ color: 'red' }}
          errorMessage={(pass !== passConfirm) ? ("Passwords don't match") : ''}
          rightIcon={{
            type: 'material-community',
            name: mostrar ? 'eye' : 'eye-off',
            onPress: () => { { setMostrar(!mostrar) } },
          }}
          leftIcon={{
            type: 'material-community',
            name: 'lock'
          }}
        /></>
    )
  };
  const footer = () => {
    return (
      <><Button
        // onPress={() => logInOut ? logInOut() : null}
        // onPress={() =>{Alert.alert('formulario valido consultar a la api')}}
        onPress={handleSignInUp}
        title="ACEPTAR"
        disabled={!correoOk || !passOk || (pass !== passConfirm)}
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
        titleStyle={{fontFamily:'JetBrains' }}
      />
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={{ color: fondo ,fontFamily:'JetBrains'}}>Tiene cuenta Inicie sesion</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Reset')}>
          <Text style={{ color: fondo ,fontFamily:'JetBrains'}}>Recuperar Password</Text>
        </TouchableOpacity>
        </>
    )
  };

  return (
    <KeyboardAwareScrollView>
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

export default signInScreen;
