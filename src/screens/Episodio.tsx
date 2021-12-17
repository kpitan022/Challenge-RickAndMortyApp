import React from 'react'
import { View } from 'react-native'
import { Card, Text } from 'react-native-elements'
import { deviceWidth, fondo, fondoClaro } from '../assets/constants/Constants'
import { Screen } from '../components'
import { Button } from 'react-native-elements/dist/buttons/Button'
// import swipe from '../assets/images/swipe.gif'

const Episodio = ({ route, navigation }: any) => {

  const { nombre, episode, air_date, created } = route.params;

  const renderBack = () => {
    return (
      <>
        <Card containerStyle={{ borderRadius: 20, width: deviceWidth * 0.95, backgroundColor: fondoClaro }}>
          <Card.Title h3  ><Text style={{ color: fondo, fontFamily: 'JetBrains', }}>{nombre}</Text></Card.Title>
          <Card.Divider inset insetType='middle' color={fondo} />
          {episode ? <Card.FeaturedSubtitle h4 h4Style={{ color: fondo }} >Episodio: {episode}</Card.FeaturedSubtitle> : null}
          {air_date ? <Card.FeaturedSubtitle h4 h4Style={{ color: fondo }} >Estreno: {air_date}</Card.FeaturedSubtitle> : null}
          {created ? <Card.FeaturedSubtitle h4 h4Style={{ color: fondo }} >Creado: {new Date(created).toLocaleString()}</Card.FeaturedSubtitle> : null}
        </Card>

      </>
    );
  };
  return (
    <Screen>
      <View style={{ justifyContent: 'center', flex: 1, }}>

        {renderBack()}
      </View>
      <View style={{ marginHorizontal: deviceWidth * 0.30, padding: 10 }}>
        <Button
          onPress={() => navigation.goBack()}
          title='Volver al listado'
          titleStyle={{ color: fondoClaro, fontFamily: 'JetBrains', }} buttonStyle={{ backgroundColor: fondo, borderRadius: 30, }} />
      </View>
    </Screen>
  )
}

export default Episodio
