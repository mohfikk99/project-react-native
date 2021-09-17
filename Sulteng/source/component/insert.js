import React, { Component } from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity,Image, ScrollView} from 'react-native';

class Tambah extends Component{

//constructor have a state that conatains the properties that will recieve the values from Text Inputes
   constructor(props){
      super(props)
       this.state = {
           TextInputEmail:'',
           TextInputName:'',
           TextInputLokasi:'',
           TextInputLokasi:'',
           TextInputCaption:'',
           iamgeSource: null,
       }
   }




//arrow function that will fire when press on save button to save data in database via API
   InsertUser = ()=>{

     const { TextInputEmail, TextInputName} = this.state
     if (TextInputEmail == "") {
       alert('email anda kosong...')
       return false
     }else if (TextInputName == "") {
       alert('password anda kosong...')
       return false
     }else {
       //constant varaibles that equal propertes in state
       const {TextInputEmail} = this.state;
       const {TextInputName} = this.state;
       const {TextInputLokasi} = this.state;
       const {TextInputCaption} = this.state;

       //API that use fetch to input data to database via backend php script
       fetch('http://192.168.43.111/wisata-sulteng/api/Cerita',{
           method: 'POST',
           headers: {
                 Accept: 'application/json',
                'Content-Type': 'application/json',
             },
             body: JSON.stringify({
                email: TextInputEmail,
                name : TextInputName,
                lokasi : TextInputLokasi,
                caption : TextInputCaption,
            })

         }).then((response) => response.json())
           .then((responseJson) => {
             console.log(responseJson);

             if (responseJson.status == 1) {
               alert('data berhasil ditambahkan...')
               return false
             }else {
               alert('data gagal ditambahkan...')
               return false
             }

           }).catch((error) => {
             console.error(error);
           });


      //alert('Pressed!!');
       }
     }

       render(){
       return(
         <ScrollView>
           <View style ={styles.container}>
             <TextInput
               //value = {this.TextInputEmail}
               placeholder = 'Enter E-mail'
               onChangeText = {TextInputValue=>this.setState({TextInputEmail:TextInputValue}) }
               underlineColorAndroid = 'transparent'
               style = {styles.TextInputStyle2}
               />

               <TextInput
               // value = {this.TextInputName}
                placeholder = 'Enter Name'
                onChangeText = {TextInputValue=>this.setState({TextInputName:TextInputValue}) }
                underlineColorAndroid = 'transparent'
                style = {styles.TextInputStyle}
               />

               <TextInput
               // value = {this.TextInputLokasi}
                placeholder = 'Enter Lokasi'
                onChangeText = {TextInputValue=>this.setState({TextInputLokasi:TextInputValue}) }
                underlineColorAndroid = 'transparent'
                style = {styles.TextInputStyle}
               />

               <TextInput
                //value = {this.TextInputCaption}
                placeholder = 'Enter  Caption'
                onChangeText = {TextInputValue=>this.setState({TextInputCaption:TextInputValue}) }
                underlineColorAndroid = 'transparent'
                style = {styles.TextInputStyle2}
               />



               <TouchableOpacity activeOpacity = {.4} style = {styles.TouchableOpacityStyle} onPress={this.InsertUser}>
                   <Text style = {styles.TextStyle}>Save</Text>
               </TouchableOpacity>


               <TouchableOpacity activeOpacity = {.4} style = {styles.TouchableOpacityStyle} onPress={this.ViewUsersList}>
                   <Text style = {styles.TextStyle}>View Users</Text>
               </TouchableOpacity>
           </View>
         </ScrollView>
       )
   }
}

const styles = StyleSheet.create ({
   container : {
       alignItems:'center',
       flex:1,
       marginTop:5,
       backgroundColor:'#fff'
   },

   TextInputStyle :{
       textAlign:'center',
       marginBottom:7,
       width:'90%',
       height:40,
       borderWidth:1,
       borderRadius:5,
       borderColor:'#FF5722'
   },

   TextInputStyle2 :{
       textAlign:'center',
       marginBottom:7,
       marginTop:20,
       width:'90%',
       height:40,
       borderWidth:1,
       borderRadius:5,
       borderColor:'#FF5722'
   },

   TextStyle : {
       color:'#fff',
       textAlign:'center'
   },

   TouchableOpacityStyle:{
       paddingTop:10,
       paddingBottom:10,
       marginTop:20,
       borderRadius:5,
       marginBottom:7,
       width:'90%',
       backgroundColor:'#00BCD4'
   },

   button:{
       width:250,
       height:50,
       backgroundColor:"#330066"
   },

   text:{
       color:'white',
       fontSize:30,
       textAlign:'center'
   },

   image:{
       width:200,
       height:200,
       marginTop:30
   }

});

export default Tambah;
