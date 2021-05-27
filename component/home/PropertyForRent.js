import { Dimensions, Image, ScrollView, Text, View } from 'react-native'
import React, { useEffect } from 'react'

import { Card } from 'react-native-elements'
import PropertyForRent from '../../data/PropertyForRent'
import { TouchableOpacity } from 'react-native'

let { width: screenWidth, height: screenHeight } = Dimensions.get('window')

function PropertyForRents({ onSelect }) {
  const [PropertiesForRent, setPropertiesForRent] = React.useState([])
  useEffect(() => {
    // const fetchStudent = async () => {
    //   const { data } = await axios.get('/api/StudentData')
    //   setStudentData(Tourpackages)
    // }
    setPropertiesForRent(PropertyForRent)
    //fetchStudent()
  }, [])
  return (
    <View style={{ flex: 1, elevation: 50 }}>
      <Card>
        <View style={{ flex: 1, marginBottom: 20 }}>
          <Text style={{ fontWeight: '900', fontSize: 20, color: '#121212' }}>
            Property For Rent
          </Text>
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
        >
          {PropertiesForRent.map((element) => {
            return (
              <TouchableOpacity key={element.id} onPress={onSelect}>
                <View style={{ flex: 1, marginLeft: 10 }}>
                  <Image
                    style={{
                      resizeMode: 'stretch',
                      height: screenHeight / 6,
                      width: screenWidth / 1.5,
                    }}
                    source={element.img}
                  />
                  <Text>{element.name}</Text>
                  <Text>{element.price}</Text>
                  <Text style={{ color: '#e00000' }}>{element.status}</Text>
                  <Text>{element.area}</Text>
                </View>
              </TouchableOpacity>
            )
          })}
        </ScrollView>
      </Card>
    </View>
  )
}

export default PropertyForRents
