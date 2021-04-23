import React from 'react'
import {View ,Image,Dimensions, Text,FlatList,TouchableHighlight} from 'react-native';
import AllStyle from '../../AllStyle'
let {width:screenWidth, height:screenHeight} = Dimensions.get('window')
import Houses from '../../data/Houses'

function PropertiesRentList({type}) {
    return (
       <View>
          <View
            
            style={{height:screenHeight/8,flexDirection:'row', width:screenWidth/1.1,marginLeft:4,alignContent:'center'}}
         >
<View style={{flex:1.5,borderWidth:0.5,borderColor:'#444',marginLeft:9,marginTop:10, padding:5,justifyContent:'center',alignItems:'center'}}>
        <Text style={[{textAlign:'center'},AllStyle.tabContent]}>Appartment/Flat</Text>
        
        </View>
        <View style={{flex:1.5,borderWidth:0.5,borderColor:'#444',marginLeft:9,marginTop:10, padding:5,justifyContent:'center',alignItems:'center'}}>
        <Text style={[{textAlign:'center'},AllStyle.tabContent]}>Villa/House</Text>
        
        </View>

          </View>
                    <View
            
                    style={{height:screenHeight/8,flexDirection:'row', width:screenWidth/1.1,marginLeft:4,alignContent:'center'}}
                 >
        <View style={{flex:1.5,borderWidth:0.5,borderColor:'#444',marginLeft:9,marginTop:10, padding:5,justifyContent:'center',alignItems:'center'}}>
                <Text style={[{textAlign:'center'},AllStyle.tabContent]}>Commercial</Text>
                
                </View>
                <View style={{flex:1.5,borderWidth:0.5,borderColor:'#444',marginLeft:9,marginTop:10, padding:5,justifyContent:'center',alignItems:'center'}}>
                <Text style={[{textAlign:'center'},AllStyle.tabContent]}>Rooms</Text>
                
                </View>
        
                  </View>

                  <View
            
            style={{height:screenHeight/8,flexDirection:'row', width:screenWidth/1.1,marginLeft:4,alignContent:'center'}}
         >
<View style={{flex:1.5,borderWidth:0.5,borderColor:'#444',marginLeft:9,marginTop:10, padding:5,justifyContent:'center',alignItems:'center'}}>
        <Text style={[{textAlign:'center'},AllStyle.tabContent]}>Short Term(Daily)</Text>
        
        </View>
        <View style={{flex:1.5,borderWidth:0.5,borderColor:'#444',marginLeft:9,marginTop:10, padding:5,justifyContent:'center',alignItems:'center'}}>
        <Text style={[{textAlign:'center'},AllStyle.tabContent]}>Short Term(Monthly)</Text>
        
        </View>

          </View>
                  </View>      
    )
}

export default PropertiesRentList
