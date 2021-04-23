import React from 'react';
import { View,FlatList,Text } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import PropertyForRent from '../../data/PropertyForRent'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../../component/headerbutton/HeaderButton'
import PropertyCards from '../../component/propertyCards/PropertyCards'

const  PropertyDetailRent = (props) => {
  

     const renderProperty = (itemData) =>{ 
          return(
            <PropertyCards
          title= {itemData.item.name}
          images = {itemData.item.img}
          costs = {itemData.item.cost}
          price = {itemData.item.price}
          onSelect={()=>{
            props.navigation.navigate({routeName: 'Contact_Us'})}}
  
  />
            );
          };  
 return (
  <View style={{width:'100%'}}>    
   
   <FlatList
         data={PropertyForRent}
         keyExtractor={item => item._id}
         renderItem={renderProperty}
         numColumns={1}
       />
       </View>
      )
  }

  PropertyDetailRent.navigationOptions = navigationData => {
    return{
      headerTitle: 'For Rent', 
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
      )
    };
  
  };
  
  export default PropertyDetailRent