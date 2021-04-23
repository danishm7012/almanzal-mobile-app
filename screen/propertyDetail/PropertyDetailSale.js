import React from 'react';
import { View,Image,FlatList,Text } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import PropertyForSaleData from '../../data/PropertyForSaleData'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../../component/headerbutton/HeaderButton'
import PropertyCards from '../../component/propertyCards/PropertyCards'

const  PropertyDetailSale = (props) => {
  

     const renderProperty = (itemData) =>{ 
         
          return(
            <PropertyCards
          title= {itemData.item.name}
          images = {itemData.item.img}
          address = {itemData.item.address}
          price = {itemData.item.price}
          bed = {itemData.item.bedroom}
          giraaj = {itemData.item.giraaj}
          area = {itemData.item.area}
          bath = {itemData.item.attachBath}
          status = {itemData.item.status}
          onSelect={()=>{
            props.navigation.navigate({routeName: 'Contact_Us'})}}
  
  />
            );
          };  
 return (
  <View style={{width:'100%'}}>    
   
   <FlatList
         data={PropertyForSaleData}
         keyExtractor={item => item.id}
         renderItem={renderProperty}
         numColumns={1}
       />
       </View>
      )
  }

  PropertyDetailSale.navigationOptions = navigationData => {
    return{
        headerTitle: (
            <Image source={require('../../assets/realestatelogo.png')}/>
        ), 
      headerRight: () => (  <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="compdetail"
        iconName="ios-add"
        onPress={
          () => {
            navigationData.navigation.navigate('Property_Form')
          }
         }
        
        />
      </HeaderButtons>
      ),
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent = {HeaderButton}>
          <Item 
          title='Back Button' 
          iconName='arrow-back' 
          onPress={() => {
            navigationData.navigation.goBack();
          }} /> 
      
        </HeaderButtons>
      )
    };
  
  };
  
  export default PropertyDetailSale