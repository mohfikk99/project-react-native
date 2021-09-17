import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import Card from './Card';

export default CardPariwisata = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://192.168.43.111/wisata-sulteng/api/Server')
      .then((response) => response.json())
      .then((json) => setData(json.data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{flexWrap: 'wrap', marginTop: -13, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 5}}>

      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
          <Card
            image={{uri:'http://192.168.43.111/wisata-sulteng/assets/img/wisata/'+item.image}}
            title={item.name}/>

          )}
        />
      )}

    </View>
  );
};
