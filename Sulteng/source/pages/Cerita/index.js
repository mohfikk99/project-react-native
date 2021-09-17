import React, { useEffect, useState } from 'react';
import {View, Text, Image, FlatList, ActivityIndicator, SafeAreaView, TouchableOpacity } from 'react-native';
import Card from '../../component/Card';



export default Pariwisata = ({navigation: {navigate}}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://wisatasulteng.com/api/Cerita?wisatasulteng-api-key=samalili051099')
      .then((response) => response.json())
      .then((json) => setData(json.data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

    return (
      <SafeAreaView style={{}}>

              {isLoading ? <ActivityIndicator/> : (
                <FlatList
                  horizontal={false}
                  numColumns={2}
                  data={data}
                  keyExtractor={({ id }, index) => id}
                  renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => navigate('DetailCerita', { data: [item.name, item.lokasi, item.gambar, item.caption]})}>
                    <View style={{ padding: 5, marginHorizontal: 4, marginTop: 10, marginBottom: 10, width: 173, borderRadius: 7, height: 200, backgroundColor: '#990900'}}>
                      <Text style={{textAlign: 'left', fontSize: 15, fontWeight: 'bold',  color: 'white', marginVertical: 5}}>{item.name}</Text>
                      <Image source={{uri:'http://192.168.43.111/wisata-sulteng/assets/img/cerita/'+item.gambar}} style={{width: undefined, height: 160}}/>
                    </View>
                  </TouchableOpacity>

                  )}
                />
              )}

      </SafeAreaView>
    );

};
