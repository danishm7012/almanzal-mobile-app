import { FlatList, Image, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import React, { useEffect } from 'react'

import HeaderButton from '../../component/headerbutton/HeaderButton'
import PropertyCards from '../../component/propertyCards/PropertyCards'
import PropertyForRent from '../../data/PropertyForRent'

const PropertyDetailRent = (props) => {
  const [PropertiesForRent, setPropertyForRent] = React.useState([])
  useEffect(() => {
    // const fetchStudent = async () => {
    //   const { data } = await axios.get('/api/StudentData')
    //   setStudentData(Tourpackages)
    // }
    setPropertyForRent(PropertyForRent)
    //fetchStudent()
  }, [])
  const renderProperty = (itemData) => {
    return (
      <PropertyCards
        title={itemData.item.name}
        images={itemData.item.img}
        address={itemData.item.address}
        price={itemData.item.price}
        bed={itemData.item.bedroom}
        giraaj={itemData.item.giraaj}
        area={itemData.item.area}
        bath={itemData.item.attachBath}
        status={itemData.item.status}
        onSelect={() => {
          props.navigation.navigate({ routeName: 'Contact_Us' })
        }}
      />
    )
  }
  return (
    <View style={{ width: '100%' }}>
      <FlatList
        data={PropertiesForRent}
        keyExtractor={(item) => item.id}
        renderItem={renderProperty}
        numColumns={1}
      />
    </View>
  )
}

PropertyDetailRent.navigationOptions = (navigationData) => {
  return {
    headerTitle: () => (
      <Image source={require('../../assets/realestatelogo.png')} />
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='compdetail'
          iconName='ios-add'
          onPress={() => {
            navigationData.navigation.navigate('Property_Form')
          }}
        />
      </HeaderButtons>
    ),
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Back Button'
          iconName='arrow-back'
          onPress={() => {
            navigationData.navigation.goBack()
          }}
        />
      </HeaderButtons>
    ),
  }
}

export default PropertyDetailRent
