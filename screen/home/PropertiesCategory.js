import React from 'react'
import {
  View,
  Image,
  StatusBar,
  Text,
  FlatList,
  TouchableHighlight,
} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../../component/headerbutton/HeaderButton'
import SearchBars from '../../component/searchComponent/SearchBar'
import AllStyle from '../../AllStyle'
import SegmentedControlTab from 'react-native-segmented-control-tab'
import { ScrollView } from 'react-native-gesture-handler'
import PropertiesBuyList from '../../component/home/PropertiesFlatlist'
import PropertyForSale from '../../component/home/PropertyForSale'
import PropertyForRents from '../../component/home/PropertyForRent'
import NewProjects from '../../component/home/NewProjects'
import PropertiesRentList from '../../component/home/PropertyRentList'

const PropertiesCategory = (props) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [selectedIndexinner, setSelectedIndexinner] = React.useState(0)

  const handleSingleIndexSelect = (index) => {
    // For single Tab Selection SegmentedControlTab
    setSelectedIndex(index)
  }
  const handleSingleIndexSelectinner = (index) => {
    // For single Tab Selection SegmentedControlTab
    setSelectedIndexinner(index)
  }

  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 2, alignSelf: 'stretch' }}>
          <SearchBars />
        </View>
        <View style={AllStyle.container}>
          {/* Simple Segmented Control*/}
          <Text style={AllStyle.headerText}>Properties For</Text>
          <SegmentedControlTab
            values={['Sale', 'Rent']}
            selectedIndex={selectedIndex}
            tabStyle={AllStyle.tabStyle}
            activeTabStyle={AllStyle.activeTabStyle}
            onTabPress={handleSingleIndexSelect}
            tabsContainerStyle={{
              height: 40,
              marginTop: 0,
              marginBottom: 10,
            }}
          />
          {/* <View style={AllStyle.seperator} /> */}

          {selectedIndex === 0 && <PropertiesBuyList />}

          {selectedIndex === 1 && <PropertiesRentList />}

          <View style={AllStyle.seperator} />
        </View>
        <View style={{ flex: 1.3 }}>
          <PropertyForSale />
        </View>
        <View style={{ flex: 1.3 }}>
          <PropertyForRents
            onSelect={() => {
              props.navigation.navigate({ routeName: 'Property_Detail_Rent' })
            }}
          />
        </View>

        <View style={{ flex: 1.3 }}>
          <NewProjects />
        </View>
      </View>
    </ScrollView>
  )
}

PropertiesCategory.navigationOptions = (navData) => {
  return {
    headerTitle: <Image source={require('../../assets/realestatelogo.png')} />,

    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Menu'
          iconName='ios-menu'
          onPress={() => {
            navData.navigation.toggleDrawer()
          }}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          iconName='person'
          onPress={() => {
            navData.navigation.navigate('Login_Screen')
            // Share.share({
            //   title: 'Paradisegoc App',
            //   message:  'https://reactnative.dev/docs/share'  + '\nHy! Happy to see you!'
            // }).then((res) => console.log(res))
            //   .catch((error) => console.log(error))
          }}
        />
      </HeaderButtons>
    ),
  }
}

export default PropertiesCategory
