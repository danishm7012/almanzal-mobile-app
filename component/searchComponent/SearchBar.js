import { Card, SearchBar } from 'react-native-elements'

import { Dimensions } from 'react-native'
import React from 'react'
let { height, width } = Dimensions.get('window')

export default class SearchBars extends React.Component {
  state = {
    search: '',
  }

  updateSearch = (search) => {
    this.setState({ search })
  }

  render() {
    const { search } = this.state

    return (
      <Card
        containerStyle={{
          marginTop: 0,
          elevation: 5,
          width: '100%',
          marginLeft: 0,
        }}
      >
        <SearchBar
          placeholder="Type Here..."
          containerStyle={{ backgroundColor: '#fff', borderWidth: 0 }}
          onChangeText={this.updateSearch}
          value={search}
          lightTheme={true}
          inputContainerStyle={{ backgroundColor: '#fff' }}
        />
      </Card>
    )
  }
}
