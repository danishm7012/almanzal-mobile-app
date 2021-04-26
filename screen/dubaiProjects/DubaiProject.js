import React from 'react';
import { View,Image,FlatList,Text } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../../component/headerbutton/HeaderButton'
import PropertyCards from '../../component/propertyCards/PropertyCards'
import newProjectsDubaiData from '../../data/newProjectsDubaiData';

const  DubaiProject = (props) => {
  

     const renderProject = (itemData) =>{ 
         
          return(
            <PropertyCards
          title= {itemData.item.name}
          images = {itemData.item.img}
          address = {itemData.item.address}
          onSelect={()=>{
            props.navigation.navigate({routeName: 'Contact_Us'})}}
  
  />
            );
          };  
 return (
  <View style={{width:'100%'}}>    
   
   <FlatList
         data={newProjectsDubaiData}
         keyExtractor={item => item.id}
         renderItem={renderProject}
         numColumns={1}
       />
       </View>
      )
  }

  DubaiProject.navigationOptions = navigationData => {
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
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title='Menu'
            iconName='ios-menu'
            onPress={() => {
                navigationData.navigation.toggleDrawer()
            }}
          />
        </HeaderButtons>
      )
    };
  
  };
  
  export default DubaiProject