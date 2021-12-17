import React from 'react'
import { View } from 'react-native'
import { Card, Text } from 'react-native-elements'
import { deviceWidth, fondo, fondoClaro } from '../assets/constants/Constants'
import { Screen } from '../components'
import { Button } from 'react-native-elements/dist/buttons/Button'
// import swipe from '../assets/images/swipe.gif'

const Lugar = ({ route, navigation }: any) => {

  const { nombre, type, dimension } = route.params;

  const renderBack = () => {
    return (
      <>
        <Card containerStyle={{ borderRadius: 20, width: deviceWidth * 0.95, backgroundColor: fondoClaro }}>
          <Card.Title h3  ><Text style={{ color: fondo, fontFamily: 'JetBrains', }}>{nombre}</Text></Card.Title>
          <Card.Divider inset insetType='middle' color={fondo} />
          {type ? <Card.FeaturedSubtitle h4 h4Style={{ color: fondo }} >Tipo: {type}</Card.FeaturedSubtitle> : null}
          {dimension ? <Card.FeaturedSubtitle h4 h4Style={{ color: fondo }} >Dimensíon: {dimension}</Card.FeaturedSubtitle> : null}
          {/* {created ? <Card.FeaturedSubtitle h4 h4Style={{ color: fondo }} >Creado: {created}</Card.FeaturedSubtitle> : null} */}
        </Card>
        
      </>
    );
  };
  return (
    <Screen>
      <View style={{ justifyContent: 'center', flex: 1, }}>

        {renderBack()}
      </View>
      <View  style={{ marginHorizontal:deviceWidth*0.30, padding:10 }}>
          <Button 
          onPress={()=>navigation.goBack()}
          title='Volver al listado' 
          titleStyle={{ color: fondoClaro, fontFamily: 'JetBrains', }} buttonStyle={{backgroundColor: fondo,borderRadius: 30,}} />
        </View>
    </Screen>
  )
}

export default Lugar
