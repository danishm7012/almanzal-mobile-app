import React, { useState } from 'react';
import { StyleSheet,Image,TextInput,TouchableOpacity,Dimensions,Button,ScrollView, Text, View } from 'react-native';
import Color from '../../constants/Colors'
import { Avatar,  Card, Title, Paragraph } from 'react-native-paper';

let {width:screenWidth, height:screenHeight} = Dimensions.get('window')

 function PropertyForm(navData) {
    const [packege, setPackege] = useState('');
    const [cost, setCost] = useState('');
 
 return (

<ScrollView style={styles.container}>
    <Card
    elevation={65}
    style={{
      //  flex:1,
    alignSelf:'stretch',
    marginTop:screenHeight/8.5,
    // justifyContent:'center',
    // alignItems:'center',
    }}>
<View 
style={{
    flex:1,
alignSelf:'stretch',
justifyContent:'center',
paddingTop:screenHeight/7,
alignItems:'center',

}}
>
   
<View style={{
  flex:1,
  alignSelf:'stretch',
  justifyContent:'center',
  alignItems:'center',
  marginTop:10,
  
  }}>
    <View style={styles.inputView}>
    <TextInput
      style={styles.TextInput}
      placeholder="Packege Title..."
      placeholderTextColor="#003f5c"
      onChangeText={(nam) => setPackege(nam)}
    />
  </View>
   
  <View style={styles.inputView}>
    <TextInput
      style={styles.TextInput}
      placeholder="Cost..."
      placeholderTextColor="#003f5c"
      secureTextEntry={true}
      onChangeText={(cos) => setCost(cos)}
    />
  </View>


  <TouchableOpacity  style={[{marginBottom:screenHeight/7},styles.loginBtn]}>
  <Text style={styles.loginText}>Add Packege</Text>
</TouchableOpacity>

</View>
  </View>
  </Card>
  </ScrollView>
 );
}


PropertyForm.navigationOptions = navData => {
  
    return{
  
    headerTitle:'Add Property',
    
    }
  }

export default PropertyForm
const styles = StyleSheet.create({
    container: {
      flex: 1,
      //backgroundColor: Color.accentColour,

    },
    
      inputView: {
        backgroundColor: "#fff",
        width: "90%",
        height: 45,

        marginBottom: 20,
        alignItems: "flex-start",
        borderWidth:1,
      },
      
      TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
      },
loginBtn:{
   width:"60%",
   height:50,
   borderRadius: 30,
   alignItems:"center",
   justifyContent:"center",
   marginTop:10,
   borderWidth:1,
   borderColor:Color.primaryColour,
   backgroundColor:Color.accentColour,
 },
 loginText:{
color:'#fff',
fontFamily:'open-sans-bold',
 },
  });