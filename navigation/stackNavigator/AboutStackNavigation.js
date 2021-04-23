import Color from '../../constants/Colors'
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import {Platform } from "react-native"
import About from '../../screen/about/About';



const AboutStackNavigator = createStackNavigator({
    About_Us:{
    screen:About,
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
const AboutStackNavigation = createAppContainer(AboutStackNavigator);
export default AboutStackNavigation
