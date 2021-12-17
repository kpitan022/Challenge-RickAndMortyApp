import React from 'react'
import { View, Text, Platform, ScrollView, Dimensions } from 'react-native'
import { Card } from 'react-native-elements'
import { deviceWidth, fondo, fondoClaro } from '../assets/constants/Constants'
import { Header, MyCard, Screen } from '../components'

const Info = ({ navigation }: any) => {
  const renderBack = () => {
    return (
      <Card containerStyle={{ borderRadius: 20, width: deviceWidth * 0.95, backgroundColor: fondoClaro }}>
        <Card.Title h3  ><Text style={{ color: fondo, fontFamily: 'JetBrains', }}>Info</Text></Card.Title>
        <Card.Divider inset insetType='middle' color={fondo} />
        <Card.FeaturedSubtitle h4 h4Style={{ color: fondo }} >Dispositivo: {Platform.OS}</Card.FeaturedSubtitle>
        {Platform.OS === 'android' ? <>
          <Card.FeaturedSubtitle h4 h4Style={{ color: fondo }} >Version: {JSON.stringify(Platform.constants.Release)}</Card.FeaturedSubtitle>
          <Card.FeaturedSubtitle h4 h4Style={{ color: fondo }} >Marca: {JSON.stringify(Platform.constants.Brand)}</Card.FeaturedSubtitle>
          <Card.FeaturedSubtitle h4 h4Style={{ color: fondo }} >Modelo: {JSON.stringify(Platform.constants.Model)}</Card.FeaturedSubtitle>
          <Card.FeaturedSubtitle h4 h4Style={{ color: fondo }} >Fabricante: {JSON.stringify(Platform.constants.Manufacturer)}</Card.FeaturedSubtitle>
          <Card.FeaturedSubtitle h4 h4Style={{ color: fondo }} >Modo: {JSON.stringify(Platform.constants.uiMode)}</Card.FeaturedSubtitle>
          <Card.FeaturedSubtitle h4 h4Style={{ color: fondo }} >Serial : {JSON.stringify(Platform.constants.Serial)}</Card.FeaturedSubtitle>
        </> :
          <><Card.FeaturedSubtitle h4 h4Style={{ color: fondo }} >3D Touch : {JSON.stringify(Platform.constants.forceTouchAvailable)}</Card.FeaturedSubtitle>
            <Card.FeaturedSubtitle h4 h4Style={{ color: fondo }} >Tipo de interfaz  : {JSON.stringify(Platform.constants.interfaceIdiom)}</Card.FeaturedSubtitle>
            <Card.FeaturedSubtitle h4 h4Style={{ color: fondo }} >Versión del sistema operativo específica para iOS: {JSON.stringify(Platform.constants.osVersion)}</Card.FeaturedSubtitle>
            <Card.FeaturedSubtitle h4 h4Style={{ color: fondo }} >Nombre del sistema operativo específica para iOS {JSON.stringify(Platform.constants.systemName)}</Card.FeaturedSubtitle>
          </>
        }
      </Card>
    );
  };
  return (
    <Screen>
      <Header title={'Info del dispositivo'} navigation={navigation} />
      <View>
        {renderBack()}

      </View>
    </Screen >
  )
}

export default Info
