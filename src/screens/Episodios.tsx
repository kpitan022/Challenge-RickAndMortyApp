import React, { useState } from 'react'
import { Header, Screen } from '../components'
import { useQuery, gql } from "@apollo/client";
import { FlatList, TouchableOpacity, View } from 'react-native';
import { Button, Card, Icon, Text } from 'react-native-elements';
import { deviceWidth, fondo, fondoClaro } from '../assets/constants/Constants';

const GET_QUERY2 = gql`
query($pagina:Int){
  episodes(page:$pagina) {
    results{
      id 
      name 
      episode 
      air_date
      created
    }
    info{
      pages 
      next 
      prev
    }
  }
}
  `;

const Episodios = ({ navigation }: any) => {
  const [pagina, setPagina] = useState(1)
  const { loading, error, data } = useQuery(GET_QUERY2, {
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
      <Header title={'Episodios'} navigation={navigation} />
      <Card containerStyle={{ backgroundColor: fondoClaro, height: '100%', flex: 1, borderRadius: 30, paddingBottom: 10 }} >
        <Card.Title h3><Text style={{ color: fondo ,fontFamily:'JetBrains', fontSize:35}}>Episodios</Text></Card.Title>
        <FlatList
          data={data.episodes.results}
          style={{ width: deviceWidth*0.8, backgroundColor: fondoClaro }}
          renderItem={(item) => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate("Episodio", { nombre: `${item.item.name}`,  episode: `${item.item.episode}`, air_date: `${item.item.air_date}`, created: `${item.item.created}` })} >
                <Card.Divider />
                <View key={item.item.id} style={{ flexDirection: 'row', flex: 1, alignItems: 'flex-start', alignContent: 'flex-start' }} >
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
          onPress={() => { data.episodes.info.prev ? setPagina(data.episodes.info.prev) : null }}
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
          onPress={() => { data.episodes.info.next ? setPagina(data.episodes.info.next) : null }}
          iconRight={true}
          buttonStyle={{ backgroundColor: fondoClaro }}
          icon={{ name: 'skip-next-outline', type: 'material-community', color: fondo }}
        />
        <Button
          onPress={() => { data.episodes.info.pages ? setPagina(data.episodes.info.pages) : null }}
          iconRight={true}
          buttonStyle={{ backgroundColor: fondoClaro }}
          icon={{ name: 'skip-forward-outline', type: 'material-community', color: fondo }}
        />

      </View>
    </Screen>
  )
}

export default Episodios
