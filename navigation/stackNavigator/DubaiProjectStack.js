import Color from '../../constants/Colors'
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import {Platform } from "react-native"
import DubaiProject from '../../screen/dubaiProjects/DubaiProject';



const DubaiProjectStackNavigator = createStackNavigator({
    Dubai_Project:{
    screen:DubaiProject,
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
const DubaiProjectStackNavigation = createAppContainer(DubaiProjectStackNavigator);
export default DubaiProjectStackNavigation
