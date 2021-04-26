import Color from '../../constants/Colors'
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import {Platform } from "react-native"
import TurkeyProject from '../../screen/TurkeyProjects/TurkeyProject';



const TurkeyProjectStackNavigator = createStackNavigator({
    Turkey_Project:{
    screen:TurkeyProject,
    navigationOptions:{
      headerTitleAlign:'center',
    headerStyle:{
  backgroundColor: Platform.OS==='android' ? '#fff'  : '#fff'
      },
      headerTitleStyle: {
        fontFamily: "open-sans-bold",
        fontWeight: "200"
      },
      headerTintColor: 'white',
    },
  
  },

  
});
const TurkeyProjectStackNavigation = createAppContainer(TurkeyProjectStackNavigator);
export default TurkeyProjectStackNavigation
