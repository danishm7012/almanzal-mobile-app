import { Image, View } from 'react-native'
import React, { Component } from 'react'

import AllStyle from '../../AllStyle'
import Swiper from 'react-native-swiper'

export default class SwiperComponent extends Component {
  render() {
    return (
      <Swiper
        autoplay={true}
        horizontal={false}
        showsPagination={false}
        showsButtons={true}
      >
        <View style={{ flex: 1 }}>
          <Image
            style={AllStyle.aboutSwiper}
            source={require('../../assets/swiperaboutimages/property1.jpg')}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Image
            style={AllStyle.aboutSwiper}
            source={require('../../assets/swiperaboutimages/property4.jpg')}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Image
            style={AllStyle.aboutSwiper}
            source={require('../../assets/swiperaboutimages/property5.jpg')}
          />
        </View>
      </Swiper>
    )
  }
}
