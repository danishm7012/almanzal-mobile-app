import React,{useState} from 'react';
import {StyleSheet,Image,Button, View,Text,TouchableOpacity, SafeAreaView} from 'react-native'
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer'
import { Ionicons } from '@expo/vector-icons';
import {Platform,Dimensions } from "react-native"
import Color from '../../constants/Colors'
import AboutStackNavigation from '../stackNavigator/AboutStackNavigation'
import ContactUsStackNavigation from '../stackNavigator/ContactUsStackNavigation';
import TermandConditionStackNavigation from '../stackNavigator/TermandConditionStackNavigation';
import FAQStackNavigation from '../stackNavigator/FAQStackNavigation';
import { ScrollView } from 'react-native-gesture-handler'
import PropertiesCategoryStackNavigation from '../stackNavigator/propertyStack/PropertiesCategoryStackNavigation';
import PropertiesTopTabStackNavigation from '../topnavigation/PropertiesTopTabNavigation'

const MainDrawerNavigator = createDrawerNavigator({
   
  Properties_Category: {
      screen: PropertiesCategoryStackNavigation,
      navigationOptions:{
        drawerIcon: () => (
          <Ionicons name = 'home' size={25} color={Color.title}/>
        ),
        
        drawerLabel:'Home',
        
      }
    
    },
  
    About:{
      screen:AboutStackNavigation,
      navigationOptions:{
        
        drawerIcon: () => (
          <Ionicons name = 'information-circle-sharp'size={29} color={Color.title}/>
        ),
        drawerLabel:'AboutUs',
      }
    },
  
  
  
  ContactUs:{
    screen: ContactUsStackNavigation,
    navigationOptions:{
      drawerIcon: () => (
        <Ionicons name = 'call-sharp'size={25} color={Color.title}/>
      ),
      drawerLabel:'ContactUs',
    }
  },
  
  
  TermCondition:{
    screen: TermandConditionStackNavigation,
    navigationOptions:{
      drawerIcon: () => (
        <Ionicons name = 'reader-sharp'size={25} color={Color.title}/>
      ),
      drawerLabel:'Term&Condition',
    }
  },
  
  
  FandQ:{
    screen: FAQStackNavigation,
    navigationOptions:{
      drawerIcon: () => (
        <Ionicons name = 'hand-left-sharp'size={25} color={Color.title}/>
  
      ),
      drawerLabel:'FAQ',
    }
  },
  
  
  },
  
    
  {
    contentComponent: (props) => {
      return (
      <ScrollView>
      <SafeAreaView style={{flex:1}}
      forceInset={{ top: '', horizontal: 'never' }}>
        <View style={{flex:1,backgroundColor:Color.logoBack, borderBottomRightRadius:70,borderBottomLeftRadius:50}}>
          
          <View style={styles.drawerLogo}>
  
            <Image style={{flex:0.6,width:'80%',resizeMode:'stretch'}} source={require('../../assets/realestatelogo.png')} />
          </View>
          
          </View>
          
          <DrawerItems  {...props}/>
          
      </SafeAreaView>
      </ScrollView>
      
    )
},
    
   // drawerWidth: Dimensions.get('window').width * 1,
    drawerBackgroundColor: Color.drawerBack,
    // width: Dimensions.get('window').width * 2,
    contentOptions:{
      activeTintColor:Color.title,
      
    //  activeBackgroundColor : Color.accentColour,
      inactiveTintColor: Color.inactiveTitle,
      itemsContainerStyle: {
        marginVertical: 55,
      },
      
      labelStyle:{
        fontFamily: 'open-sans-bold',
        fontSize:18,
       
       
      },
      
      itemStyle:{
        marginVertical:10,
         
       
      },
      
    }
  
  });
  export default createAppContainer(MainDrawerNavigator);
  
  const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
    drawerLogo:{
      flex:1,
      height: 100,
      alignItems: 'center',
      marginTop:120, 
      justifyContent: 'center',
   
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
    cardContainer: {
      flexGrow: 1,
    },
    card: {
      flexGrow: 1,
      
      alignItems: 'center',
      justifyContent: 'center',
    },
    heading: {
      fontSize: 18,
      flex:1,
      textAlign:'center',
     
      fontWeight: '400',
      borderBottomColor:'#C0C0C0',
      backgroundColor:'#10d300',
      borderBottomWidth:2,
      textTransform: 'uppercase',
      letterSpacing: 2,
      padding:10,
    },
    body: {
      fontSize: 20,
      lineHeight: 20 * 1.9,
      textAlign: 'center',
      borderBottomWidth:2,
      borderBottomColor:'#C0C0C0',
       borderRadius:15,
    },
    subCategoriesList: {
      marginTop: 10,
      marginBottom:10,

    },
   
  
  });