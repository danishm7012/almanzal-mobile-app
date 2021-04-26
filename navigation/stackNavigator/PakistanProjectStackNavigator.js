import Color from '../../constants/Colors'
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import {Platform } from "react-native"
import PakistanProject from '../../screen/pakistanProjects/PakistanProject';



const PakistanProjectStackNavigator = createStackNavigator({
    Pakistan_Project:{
    screen:PakistanProject,
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
const PakistanProjectStackNavigation = createAppContainer(PakistanProjectStackNavigator);
export default PakistanProjectStackNavigation
