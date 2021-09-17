import React, { useEffect, useState } from 'react';
import { View, ScrollView, ActivityIndicator, TouchableOpacity, FlatList} from 'react-native';
import Card from '../../component/Card';

export default Pantai = ({navigation: {navigate}}) => {
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
      <View style={{flex: 1}}>
          {isLoading ? <ActivityIndicator/> : (
            <FlatList
              horizontal={false}
              numColumns={2}
              data={data}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigate('Details', { data: [item.name, item.sumber, item.image, item.ulasan]})}>
              <Card
                image={{uri:'https://wisatasulteng.com/assets/img/wisata/'+item.image}}
                title={item.name}/>
              </TouchableOpacity>
              )}
            />
          )}
      </View>
    );

}
