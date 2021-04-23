import React from 'react'
import { Image,Dimensions,ScrollView, View,Text } from 'react-native'
import {Card} from 'react-native-elements'
import NewProjectsData from '../../data/NewProjectsData'
let {width:screenWidth, height:screenHeight} = Dimensions.get('window')

function NewProjects() {
    return (
        
        <View style={{flex:1,elevation:50}}>
            <Card containerStyle={{}}>
                <View style={{flex:1,marginBottom:20}}>
            <Text style={{fontWeight:'900', fontSize:20,color:'#121212'}}>New Projects</Text>
            </View>
            <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            >
            {NewProjectsData.map((element) => {
                return(
                    <View key={element.id} style={{flex:1,marginLeft:10}}>
                    <Image style={{resizeMode:'stretch',height:screenHeight/6,width:screenWidth/1.5}} source= {element.img}/>
                    <Text>{element.name}</Text>
                    <Text>{element.price}</Text>
                    <Text style={{color:'#e00000'}}>{element.status}</Text>
                    
                    </View>
                )
            })}
</ScrollView>
            </Card>
        </View>
    )
}

export default NewProjects
