import React, { useState } from 'react'
import { Header, Screen } from '../components'
import { useQuery, gql } from "@apollo/client";
import { FlatList, TouchableOpacity, View } from 'react-native';
import { Avatar, Badge, Button, Card, Icon, Text } from 'react-native-elements';
import { deviceWidth, fondo, fondoClaro } from '../assets/constants/Constants';

const GET_QUERY = gql`
query($pagina:Int){
  characters(page:$pagina) {
    results{
      name 
      id 
      image 
      status 
      species
      type
      gender
    }
    info{
      pages 
      next 
      prev
    }
  }
}
  `;

const Personajes = ({ navigation }: any) => {
  const [pagina, setPagina] = useState(1)
  const { loading, error, data } = useQuery(GET_QUERY, {
    variables: { pagina },
  });
  if (loading) return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Loading button"
        loading
        type="clear"
      />
      <Text style={{ color: fondo ,fontFamily:'JetBrains', fontSize:44}}>Loading...</Text>
    </View>);
  if (error) return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Icon
        type='material-community'
        name='alert-decagram-outline'
        tvParallaxProperties={undefined}
      />
      <Text style={{ color: fondo ,fontFamily:'JetBrains', fontSize:14}}>Sometime is Wrong</Text>
    </View>
  );



  return (
    <Screen>
      <Header title={'Galeria de presonajes'} navigation={navigation} />
      <Card containerStyle={{ backgroundColor: fondoClaro, height: '100%', flex: 1, borderRadius: 30, paddingBottom: 10 }} >
        <Card.Title ><Text style={{ color: fondo ,fontFamily:'JetBrains', fontSize:35}}>Personajes</Text></Card.Title>
        <FlatList
          data={data.characters.results}
          style={{ width: deviceWidth*0.8, backgroundColor: fondoClaro }}
          renderItem={(item) => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate("Personaje", { imagen: `${item.item.image}`, nombre: `${item.item.name}`, estatus: `${item.item.status}`, especie: `${item.item.species}`, tipo: `${item.item.type}`, genero: `${item.item.gender}` })} >
                <Card.Divider />
                <View key={item.item.id} style={{ flexDirection: 'row', flex: 1, alignItems: 'flex-start', alignContent: 'flex-start' }} >
                  <Avatar rounded size='medium' source={{ uri: item.item.image }} >
                    {item.item.status === "Alive" ?
                      <Badge status='success'
                        containerStyle={{ position: 'absolute', top: -1, right: -1 }}
                      /> : <Badge status='error'
                        containerStyle={{ position: 'absolute', top: -1, right: -1 }}
                      />
                    }
                  </Avatar>
                  <Card.Title h4 h4Style={{ padding: 15 }} >{item.item.name}</Card.Title>
                </View>

              </TouchableOpacity>
            )
          }} />
      </Card>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', backgroundColor: 'transparent', paddingVertical: 10 }}>
        <Button
          onPress={() => { setPagina(1) }}
          iconRight={true}
          buttonStyle={{ backgroundColor: fondoClaro }}
          icon={{ name: 'skip-backward-outline', type: 'material-community', color: fondo }}
        />
        <Button
          onPress={() => { data.characters.info.prev ? setPagina(data.characters.info.prev) : null }}
          iconRight={false}
          buttonStyle={{ backgroundColor: fondoClaro }}
          icon={{ name: 'skip-previous-outline', type: 'material-community', color: fondo }}
        />

        <Button
          title={`Página ${pagina}`}
          titleStyle={{ color: fondo }}
          buttonStyle={{ backgroundColor: fondoClaro, }}
        />

        <Button
          onPress={() => { data.characters.info.next ? setPagina(data.characters.info.next) : null }}
          iconRight={true}
          buttonStyle={{ backgroundColor: fondoClaro }}
          icon={{ name: 'skip-next-outline', type: 'material-community', color: fondo }}
        />
        <Button
          onPress={() => { data.characters.info.pages ? setPagina(data.characters.info.pages) : null }}
          iconRight={true}
          buttonStyle={{ backgroundColor: fondoClaro }}
          icon={{ name: 'skip-forward-outline', type: 'material-community', color: fondo }}
        />

      </View>
    </Screen>
  )
}

export default Personajes
