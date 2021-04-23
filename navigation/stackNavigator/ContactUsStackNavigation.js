import ContactUs from '../../screen/contact/ContactUs'
import Color from '../../constants/Colors'
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import {Platform } from "react-native"



const ContactUsStackNavigator = createStackNavigator({
    Contact_Us:{
    screen:ContactUs,
    navigationOptions:{
      headerTitleAlign:'center',
    headerStyle:{
  backgroundColor: Platform.OS==='android' ? Color.accentColor  : Color.primaryColor
      },
      headerTitleStyle: {
        fontFamily: "open-sans-bold",
        fontWeight: "200"
      },
      headerTintColor: 'white',
    },
  
  },

  
});
const ContactUsStackNavigation = createAppContainer(ContactUsStackNavigator);
export default ContactUsStackNavigation
