import React, { Component } from 'react';
import { View, ScrollView, ActivityIndicator, FlatList} from 'react-native';
import Card from '../../component/Card';

export default class index extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      isLoading: true
    };
  }


  async componentDidMount(){
    fetch('https://wisatasulteng.com/api/Kategori?kategori=air&wisatasulteng-api-key=samalili051099',{
      method: 'GET'
    })
    .then((response) => response.json())
    .then((json) => {
      this.setState({data: json.data});
    })
    .catch((error) => console.error(error))
    .finally(() => {
      this.setState({ isLoading: false });
    });
  }

  render() {

    const { data, isLoading } = this.state;

    return (
      <View style={{flex: 1}}>
          {isLoading ? <ActivityIndicator/> : (
            <FlatList
              horizontal={false}
              numColumns={2}
              data={data}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => (

              <Card
                image={{uri:'https://wisatasulteng.com/assets/img/wisata/'+item.image}}
                title={item.name}/>

              )}
            />
          )}
      </View>
    );
  }
}
