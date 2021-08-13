// import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
// import { HeaderButtons, Item } from 'react-navigation-header-buttons'
// import React, { useEffect, useState } from 'react'

// import HeaderButton from '../../component/headerbutton/HeaderButton'
// import PropertyCards from '../../component/propertyCards/PropertyCards'
// import { SearchBar } from 'react-native-elements'
// import newProjectsCardData from '../../data/newProjectsCardData'
// import newProjectsDubaiData from '../../data/newProjectsDubaiData'
// import newProjectsTurkeyData from '../../data/newProjectsTurkeyData'

// function SearchProperty() {
//   const [data, setData] = useState([
//     ...newProjectsCardData,
//     newProjectsDubaiData,
//     ...newProjectsTurkeyData,
//   ])
//   const [query, setQuery] = useState('')
//   const [heroes, setHeroes] = useState([])

//   //   const fetchData = async () => {
//   //     const res = await fetch('https://api.opendota.com/api/heroes')
//   //     const json = await res.json()
//   //     setData(json)
//   //     setHeroes(json.slice())
//   //   }
//   //   useEffect(() => {
//   //     fetchData()
//   //     // filterNames()
//   //   }, [])

//   const formatNames = (hero) => {
//     let heroName = hero.name.charAt(14).toUpperCase() + hero.name.slice(15)
//     heroName = heroName.replace(/_/g, ' ')
//     return heroName
//   }
//   const filterNames = (hero) => {
//     console.log(`filter function${hero}`)
//     // 1.
//     let search = query.toLowerCase().replace(/ /g, '_')
//     //2.
//     if (hero.name.startsWith(search)) {
//       //3.
//       return formatNames(hero)
//     } else {
//       //4.
//       heroes.splice(heroes.indexOf(hero), 1)
//       return null
//     }
//   }

//   const updateQuery = (input) => {
//     setHeroes(data.slice())
//     setQuery(input)
//     console.log(query)
//   }

//   const listHeaderSearchBar = () => {
//     return (
//       <SearchBar
//         onChangeText={updateQuery}
//         value={query}
//         placeholder='Type Here...'
//       />
//     )
//   }

//   const renderProperty = (itemData) => {
//     //console.log(`filter function${itemData.item.name}`)
//     // filterNames(itemData.item.country)
//     return (
//       <PropertyCards
//         title={itemData.item.name}
//         images={itemData.item.img}
//         address={itemData.item.address}
//         price={itemData.item.price}
//         bed={itemData.item.bedroom}
//         giraaj={itemData.item.giraaj}
//         area={itemData.item.area}
//         bath={itemData.item.attachBath}
//         status={itemData.item.status}
//         onSelect={() => {
//           props.navigation.navigate({ routeName: 'Contact_Us' })
//         }}
//       />
//     )
//   }

//   return (
//     <View style={{ flex: 1 }}>
//       <FlatList
//         data={heroes}
//         keyExtractor={(item) => item.id}
//         extraData={query}
//         ListHeaderComponent={listHeaderSearchBar}
//         renderItem={renderProperty}
//         //     ({ item }) => (
//         //   <Text style={styles.flatList}>{filterNames(item)}</Text>
//         // )}
//       />
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   flatList: {
//     paddingLeft: 15,
//     marginTop: 15,
//     paddingBottom: 15,
//     fontSize: 20,
//     borderBottomColor: '#26a69a',
//     borderBottomWidth: 1,
//   },
// })

// export default SearchProperty

// SearchProperty.navigationOptions = (navigationData) => {
//   return {
//     headerTitle: <Image source={require('../../assets/realestatelogo.png')} />,

//     headerLeft: () => (
//       <HeaderButtons HeaderButtonComponent={HeaderButton}>
//         <Item
//           title='Menu'
//           iconName='ios-menu'
//           onPress={() => {
//             navigationData.navigation.toggleDrawer()
//           }}
//         />
//       </HeaderButtons>
//     ),
//   }
// }
