import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import Panel from '../../component/Panel';
import Jumbotron from '../../component/Jumbotron';
import Card from '../../component/Card';

export default Pariwisata = ({ navigation: { navigate } }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://wisatasulteng.com/api/Kategori?kategori=pantai&wisatasulteng-api-key=samalili051099')
      .then((response) => response.json())
      .then((json) => setData(json.data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ backgroundColor: 'white', height: 260 }}>
          <Jumbotron img={require('../../assets/tampilan/budaya.jpg')}
            judul="SULTENG"
            logo={require('../../assets/tampilan/logo.jpg')}
            jenisJudul="Wisata Budaya"
            title="Adventure/Eksplore/Trip" />

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, position: 'absolute', borderRadius: 10, marginHorizontal: 70, backgroundColor: '#990900', width: 250, height: 60, marginTop: 200 }}>
            <Panel title="Adventure" img={require('../../assets/tampilan/jelajahi.jpg')} />
            <Panel title="Eksplore" img={require('../../assets/tampilan/petualangan.jpg')} />
            <Panel title="Trip" img={require('../../assets/tampilan/trip.jpg')} />
          </View>

        </View>

        <View style={{ marginTop: 4, width: 390, height: 10, marginVertical: 15, backgroundColor: '#aaaa' }}></View>

        {isLoading ? <ActivityIndicator /> : (
          <FlatList
            horizontal={false}
            numColumns={2}
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigate('Details', { data: [item.name, item.sumber, item.image, item.ulasan] })}>
                <Card
                  image={{ uri: 'https://wisatasulteng.com/assets/img/wisata/' + item.image }}
                  title={item.name} />
              </TouchableOpacity>

            )}
          />
        )}


      </ScrollView>
    </View>
  );
}
