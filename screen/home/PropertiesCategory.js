import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { Image, LogBox, Text, View } from 'react-native'

import AllStyle from '../../AllStyle'
import HeaderButton from '../../component/headerbutton/HeaderButton'
import NewProjects from '../../component/home/NewProjects'
import PropertiesBuyList from '../../component/home/PropertiesFlatlist'
import PropertiesRentList from '../../component/home/PropertyRentList'
import PropertyForRents from '../../component/home/PropertyForRent'
import PropertyForSale from '../../component/home/PropertyForSale'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
/* import SearchBars from '../../component/searchComponent/SearchBar' */
import SegmentedControlTab from 'react-native-segmented-control-tab'

const PropertiesCategory = (props) => {
  LogBox.ignoreLogs(['Your project is accessing'])
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const handleSingleIndexSelect = (index) => {
    setSelectedIndex(index)
  }

  return (
    <ScrollView>
      {/*  <View style={{ flex: 2, alignSelf: 'stretch' }}>
          <SearchBars />
        </View> */}
      <View style={{ flex: 1 }}>
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

          {selectedIndex === 0 && (
            <PropertiesBuyList
              onSelect={() => {
                props.navigation.navigate({ routeName: 'Property_Detail_Sale' })
              }}
            />
          )}

          {selectedIndex === 1 && (
            <PropertiesRentList
              onSelect={() => {
                props.navigation.navigate({ routeName: 'Property_Detail_Rent' })
              }}
            />
          )}

          <View style={AllStyle.seperator} />
        </View>
        <View style={{ flex: 1.3 }}>
          <PropertyForSale
            onSelect={() => {
              props.navigation.navigate({ routeName: 'Property_Detail_Sale' })
            }}
          />
        </View>
        <View style={{ flex: 1.3 }}>
          <PropertyForRents
            onSelect={() => {
              props.navigation.navigate({ routeName: 'Property_Detail_Rent' })
            }}
          />
        </View>

        <View style={{ flex: 1.3 }}>
          <NewProjects
            onSelectDubai={() => {
              props.navigation.navigate({ routeName: 'Dubai_Project' })
            }}
            onSelectTurkey={() => {
              props.navigation.navigate({ routeName: 'Turkey_Project' })
            }}
            onSelectPak={() => {
              props.navigation.navigate({ routeName: 'Pakistan_Project' })
            }}
          />
        </View>
      </View>
    </ScrollView>
  )
}

PropertiesCategory.navigationOptions = (navData) => {
  return {
    headerTitle: () => (
      <Image source={require('../../assets/realestatelogo.png')} />
    ),

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
          }}
        />
      </HeaderButtons>
    ),
  }
}

export default PropertiesCategory
