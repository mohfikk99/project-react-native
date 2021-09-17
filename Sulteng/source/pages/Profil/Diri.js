import React, { useEffect, useState, route, params } from 'react';
import { View, Text, ScrollView, Image, ActivityIndicator, FlatList, TouchableOpacity, Button, TouchableHighlight, Alert } from 'react-native';
import Atas from '../../component/Atas';
import { useNavigation } from '@react-navigation/native';

export default Diri = ({navigation: {navigate}, route, params}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const [text, setText] = React.useState('');

  const hasUnsavedChanges = Boolean(text);

  React.useEffect(
    () =>
      navigation.addListener('beforeRemove', (e) => {
        const action = e.data.action;
        if (!hasUnsavedChanges) {
          return;
        }

        e.preventDefault();

        Alert.alert(
          'Discard changes?',
          'You have unsaved changes. Are you sure to discard them and leave the screen?',
          [
            { text: "Don't leave", style: 'cancel', onPress: () => {} },
            {
              text: 'Discard',
              style: 'destructive',
              onPress: () => navigation.dispatch(action),
            },
          ]
        );
      }),
    [hasUnsavedChanges, navigation]
  );


  useEffect(() => {
    fetch('https://wisatasulteng.com/api/Cerita?email='+route.params.setItem[3],{
      method: 'GET',
      headers: {
        'wisatasulteng-api-key': 'samalili051099',
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
    }).then((response) => response.json())
      .then((json) => setData(json.data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);


    return (
      <View style={{flex: 1}}>
        <ScrollView>
          <View style={{marginTop: 15, flexDirection: 'row', justifyContent: 'center', marginHorizontal: 5}}>
            <View style={{ padding: 5, marginBottom: 5, width: 173, borderRadius: 7, height: 230, backgroundColor: '#990900'}}>
              <Text style={{textAlign: 'left', fontSize: 15, fontWeight: 'bold',  color: 'white'}}>{route.params.setItem[0]}</Text>
              <Image source={{uri:'https://wisatasulteng.com/assets/img/Profile/'+route.params.setItem[1]}} style={{width: undefined, height: 150, marginTop: 5}}/>
              <Text style={{textAlign: 'center', fontSize: 15, fontWeight: 'bold',  color: 'white', marginTop: 10}}>{route.params.setItem[2]}</Text>
            </View>
          </View>

          <View style={{marginTop: 4, marginHorizontal: 80, width: 200, height: 2, marginVertical: 15, backgroundColor: 'black'}}></View>
          <View style={{marginTop: -11, marginHorizontal: 55, width: 250, height: 2, marginVertical: 15, backgroundColor: 'black'}}></View>
          <View style={{marginTop: -12, marginHorizontal: 10, width: 340, height: 2, marginVertical: 15, backgroundColor: 'black'}}></View>


          <View style={{width: 80, height: 35, borderWidth: 3, borderRadius: 4, marginTop: 5, backgroundColor: '#990900', marginLeft: 10, flexDirection: 'row'}}>
            <Button onPress={() => navigate('Tambah', {data : [route.params.setItem[0], route.params.setItem[3] ]})} color='#990900' title='Tambahkan Cerita' />
          </View>



        </ScrollView>

        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            horizontal={false}
            numColumns={2}
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (

            <Atas title={item.name}
                  edit={() => navigation.navigate('Edit', {data: [item.id, item.lokasi, item.caption]})}
                  hapus={() => navigation.navigate('Hapus', {data: [item.id]})}
                  onPress={() => navigation.navigate('DetailCerita', { data: [item.name, item.lokasi, item.gambar, item.caption ] })}
                  image={{uri:'https://wisatasulteng.com/assets/img/cerita/'+item.gambar}} />
            )}
          />
        )}


      </View>

    );
}
