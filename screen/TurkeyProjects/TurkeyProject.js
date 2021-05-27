import { FlatList, Image, Text, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import React, { useEffect } from 'react'

import HeaderButton from '../../component/headerbutton/HeaderButton'
import PropertyCards from '../../component/propertyCards/PropertyCards'
import newProjectsTurkeyData from '../../data/newProjectsTurkeyData'

const TurkeyProject = (props) => {
  const [ProjectsTurkeyData, setnewProjectsTurkeyData] = React.useState([])
  useEffect(() => {
    // const fetchStudent = async () => {
    //   const { data } = await axios.get('/api/StudentData')
    //   setStudentData(Tourpackages)
    // }
    setnewProjectsTurkeyData(newProjectsTurkeyData)
    //fetchStudent()
  }, [])
  const renderProject = (itemData) => {
    return (
      <PropertyCards
        title={itemData.item.name}
        images={itemData.item.img}
        address={itemData.item.address}
        onSelect={() => {
          props.navigation.navigate({ routeName: 'Contact_Us' })
        }}
      />
    )
  }
  return (
    <View style={{ width: '100%' }}>
      <FlatList
        data={ProjectsTurkeyData}
        keyExtractor={(item) => item.id}
        renderItem={renderProject}
        numColumns={1}
      />
    </View>
  )
}

TurkeyProject.navigationOptions = (navigationData) => {
  return {
    headerTitle: <Image source={require('../../assets/realestatelogo.png')} />,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="compdetail"
          iconName="ios-add"
          onPress={() => {
            navigationData.navigation.navigate('Property_Form')
          }}
        />
      </HeaderButtons>
    ),
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navigationData.navigation.toggleDrawer()
          }}
        />
      </HeaderButtons>
    ),
  }
}

export default TurkeyProject
