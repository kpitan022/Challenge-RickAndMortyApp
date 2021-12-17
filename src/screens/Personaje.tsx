import React from 'react'
import { View } from 'react-native'
import { Button, Card, Text } from 'react-native-elements'
import { deviceWidth, fondo, fondoClaro } from '../assets/constants/Constants'
import { Screen } from '../components'
import GestureFlipView from 'react-native-gesture-flip-card';
// import swipe from '../assets/images/swipe.gif'

const Personaje = ({ route, navigation }: any) => {

  const { imagen, nombre, estatus, especie, tipo, genero } = route.params;
  const renderFront = () => {
    return (<>
      <Card containerStyle={{ justifyContent: 'center', borderRadius: 20, backgroundColor: fondoClaro }}>
      <Card.Title h3  ><Text style={{ color: fondo, fontFamily: 'JetBrains', }}>{nombre}</Text></Card.Title></Card>
      <Card containerStyle={{ justifyContent: 'center', borderRadius: 20, width: deviceWidth * 0.95, height: deviceWidth * 0.95, backgroundColor: fondoClaro }}>
        <Card.Image source={{ uri: imagen }} style={{ resizeMode: 'cover', width: '100%', height: '100%' }} />
      </Card>
    </>
    );
  };

  const renderBack = () => {
    return (
      <>
        <Card containerStyle={{ borderRadius: 20, width: deviceWidth * 0.95, backgroundColor: fondoClaro }}>
        <Card.Title h3  ><Text style={{ color: fondo, fontFamily: 'JetBrains', }}>{nombre}</Text></Card.Title>
          <Card.Divider inset insetType='middle' color={fondo}/>
          {estatus ? <Card.FeaturedSubtitle h4 h4Style={{color:fondo }} >Estado: {estatus}</Card.FeaturedSubtitle> : null}
          {genero ? <Card.FeaturedSubtitle h4 h4Style={{color:fondo }} >Genero: {genero}</Card.FeaturedSubtitle> : null}
          {especie ? <Card.FeaturedSubtitle h4 h4Style={{color:fondo }} >Especie: {especie}</Card.FeaturedSubtitle> : null}
          {tipo ? <Card.FeaturedSubtitle h4 h4Style={{color:fondo }} >Tipo: {tipo}</Card.FeaturedSubtitle> : null}
        </Card>
        
      </>
    );
  };
  return (
    <Screen>
      <View style={{ justifyContent: 'center', flex: 1, }}>
        <GestureFlipView width={300} height={500}>
          {renderFront()}
          {renderBack()}
        </GestureFlipView>
        
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

export default Personaje
