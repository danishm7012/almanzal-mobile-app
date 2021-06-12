import { Dimensions, Image, SafeAreaView, Text, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import AllStyle from '../../AllStyle'
import HeaderButton from '../../component/headerbutton/HeaderButton'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import SocialMediaIcon from '../../component/socialmediaIcon/SocialMediaIcon'
import SwiperComponent from '../../component/swiper/SwiperImages'

let { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const About = (props) => {
  const [socialLinks, setSocialLinks] = React.useState({
    facebook: 'https://www.facebook.com/almanzaluae',
    instagram: 'https://www.instagram.com/almanzal1/',
    twitter: 'https://twitter.com/ManzalAl',
    linkedIn: 'https://www.linkedin.com/in/al-manzal-aa548a20a/',
    website: 'https://almanzal.ae/',
  })

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={AllStyle.aboutMainClass}>
          <View style={{ height: screenHeight / 3 }}>
            <SwiperComponent />
          </View>
          <View style={{}}>
            <SocialMediaIcon
              facebookSocial={socialLinks.facebook}
              twitterSocial={socialLinks.twitter}
              linkedInSocial={socialLinks.linkedIn}
              instagramSocial={socialLinks.instagram}
              websiteSocial={socialLinks.website}
            />
          </View>
          <View style={{}}>
            <Text
              style={[
                { textDecorationLine: 'underline' },
                AllStyle.Aboutheading,
              ]}
            >
              Local Real Estate Chapter:
            </Text>
          </View>

          <View style={{ margin: 7 }}>
            <Text style={AllStyle.Aboutdetail}>
              Local Real Estate Chapter comprised of all types of properties
              like Sale, Purchase, Rent, Property Management and Real Estate
              Projects Marketing in Pakistan! Newage Marketing Global secures
              project contracts for global launching.
            </Text>
          </View>

          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Text
              style={[
                { fontFamily: 'open-sans-bold', textAlign: 'center' },
                AllStyle.Aboutdetail,
              ]}
            >
              <Ionicons name='star-sharp' size={25} color='#e00000' />
              Bin Qasim City - Gwadar
            </Text>
            <Text
              style={[
                { fontFamily: 'open-sans-bold', textAlign: 'center' },
                AllStyle.Aboutdetail,
              ]}
            >
              <Ionicons name='star-sharp' size={25} color='#e00000' />
              SQ Mall 99 - Lahore
            </Text>
            <Text
              style={[
                { fontFamily: 'open-sans-bold', textAlign: 'center' },
                AllStyle.Aboutdetail,
              ]}
            >
              <Ionicons name='star-sharp' size={25} color='#e00000' />
              Zameen Aurum - Lahore
            </Text>
            <Text
              style={[
                { fontFamily: 'open-sans-bold', textAlign: 'center' },
                AllStyle.Aboutdetail,
              ]}
            >
              <Ionicons name='star-sharp' size={25} color='#e00000' />
              Dream Gardens - Lahore
            </Text>
            <Text
              style={[
                { fontFamily: 'open-sans-bold', textAlign: 'center' },
                AllStyle.Aboutdetail,
              ]}
            >
              <Ionicons name='star-sharp' size={25} color='#e00000' />
              DHA Raya - Lahore
            </Text>
            <Text
              style={[
                { fontFamily: 'open-sans-bold', textAlign: 'center' },
                AllStyle.Aboutdetail,
              ]}
            >
              <Ionicons name='star-sharp' size={25} color='#e00000' />
              New Metro City - Jhelum
            </Text>
            <Text
              style={[
                { fontFamily: 'open-sans-bold', textAlign: 'center' },
                AllStyle.Aboutdetail,
              ]}
            >
              <Ionicons name='star-sharp' size={25} color='#e00000' />
              Lavish Mall - Islamabad
            </Text>
            <Text
              style={[
                { fontFamily: 'open-sans-bold', textAlign: 'center' },
                AllStyle.Aboutdetail,
              ]}
            >
              <Ionicons name='star-sharp' size={25} color='#e00000' />
              Mivida Housing Project - Islamabad
            </Text>
            <Text
              style={[
                { fontFamily: 'open-sans-bold', textAlign: 'center' },
                AllStyle.Aboutdetail,
              ]}
            >
              <Ionicons name='star-sharp' size={25} color='#e00000' />
              Zameen Aurum - Lahore
            </Text>
            <Text
              style={[
                { fontFamily: 'open-sans-bold', textAlign: 'center' },
                AllStyle.Aboutdetail,
              ]}
            >
              <Ionicons name='star-sharp' size={25} color='#e00000' />
              Zameen Aurum - Lahore
            </Text>
            <Text
              style={[
                { fontFamily: 'open-sans-bold', textAlign: 'center' },
                AllStyle.Aboutdetail,
              ]}
            >
              <Ionicons name='star-sharp' size={25} color='#e00000' />
              Zameen Aurum - Lahore
            </Text>
          </View>

          <View style={{}}>
            <Text style={AllStyle.Aboutheading}>
              International Real Estate Chapter:
            </Text>
          </View>

          <View style={{ margin: 7 }}>
            <Text style={AllStyle.Aboutdetail}>
              Under this segment, Newage Marketing Global engaged in Real Estate
              Marketing, Property Buying, Selling, Rent, Property Management
              Services Globally like UAE, UK, Turkey, USA and Pakistan Newage
              Marketing Global providing state of the art services to its global
              clientage regarding buying, selling, letting facilities to the
              clients. We are launching projects in the Gulf, Europe, USA and
              Pakistan
            </Text>
          </View>

          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Text
              style={[
                { fontFamily: 'open-sans-bold', textAlign: 'center' },
                AllStyle.Aboutdetail,
              ]}
            >
              <Ionicons name='star-sharp' size={25} color='#e00000' />
              Paramount Towers
            </Text>
            <Text
              style={[
                { fontFamily: 'open-sans-bold', textAlign: 'center' },
                AllStyle.Aboutdetail,
              ]}
            >
              <Ionicons name='star-sharp' size={25} color='#e00000' />
              Nashama
            </Text>
            <Text
              style={[
                { fontFamily: 'open-sans-bold', textAlign: 'center' },
                AllStyle.Aboutdetail,
              ]}
            >
              <Ionicons name='star-sharp' size={25} color='#e00000' />
              Habtoor City
            </Text>
            <Text
              style={[
                { fontFamily: 'open-sans-bold', textAlign: 'center' },
                AllStyle.Aboutdetail,
              ]}
            >
              <Ionicons name='star-sharp' size={25} color='#e00000' />
              Sky Courts
            </Text>
            <Text
              style={[
                { fontFamily: 'open-sans-bold', textAlign: 'center' },
                AllStyle.Aboutdetail,
              ]}
            >
              <Ionicons name='star-sharp' size={25} color='#e00000' />
              Ajman City
            </Text>
          </View>
          <View style={{}}>
            <Text style={AllStyle.Aboutdetail}>
              and other UK, USA and Canada projects. The projects and properties
              are residential, commercial, flats and business centers with the
              best locations.
            </Text>
          </View>

          <View style={{}}>
            <Text style={AllStyle.Aboutheading}>Our Vision</Text>
          </View>

          <View style={{ margin: 7 }}>
            <Text style={AllStyle.Aboutdetail}>
              Our real estate projects of UAE are marketed to GCC countries
              including Iran, Iraq, Bahrain, Saudi Arabia, etc. and other parts
              of the world. It is a golden opportunity for our UAE clients and
              surrounding clients to invest in their money. Advanced
              infrastructure and innovative business ideas for our clients is
              our ultimate goal. We provide long-term plans that lead to bright
              futures.
            </Text>
          </View>

          <View style={{}}>
            <Text style={AllStyle.Aboutheading}>Our Mission</Text>
          </View>

          <View style={{ margin: 7 }}>
            <Text style={AllStyle.Aboutdetail}>
              We believe in safe hands investments of our clients and more
              appropriate and easy ways of investments with complete
              documentation facilities. Import export globally with accessible
              opportunities is what we offer to our clients. Our investment
              plans are equipped with further planning of attaining passports
              and other perks of these countries.
            </Text>
          </View>

          <View style={{}}>
            <Text style={AllStyle.Aboutheading}>Meet Us in UK</Text>
          </View>
          <View style={{ margin: 7 }}>
            <Text style={AllStyle.Aboutdetail}>
              3rd Floor, 244 Edgware Road, London W2 1DS, UK.
            </Text>
            <Text style={AllStyle.Aboutdetail}>WhatsApp: +44 7391 758 721</Text>
          </View>

          <View style={{}}>
            <Text style={AllStyle.Aboutheading}>Meet Us in UAE</Text>
          </View>
          <View style={{ margin: 7 }}>
            <Text style={AllStyle.Aboutdetail}>
              Park Lane Plaza, 12th Floor, Office No. 1213, Down Town, Dubai
              UAE. P.O. BOX 415253
            </Text>
            <Text style={AllStyle.Aboutdetail}>Landline +971 45891215</Text>
            <Text style={AllStyle.Aboutdetail}>Mobile: +971 58 1439463</Text>
            <Text style={AllStyle.Aboutdetail}>WhatsApp: +971 54 5277366</Text>
          </View>

          <View style={{}}>
            <Text style={AllStyle.Aboutheading}>Meet Us in Pakistan</Text>
          </View>
          <View style={{ margin: 7 }}>
            <Text style={AllStyle.Aboutdetail}>
              Lahore Office: Office No.18, Naqi Arcade, 71-The Mall Road,
              Lahore, Pakistan.
            </Text>
            <Text style={AllStyle.Aboutdetail}>
              Land Line : +92 423 2801559
            </Text>
            <Text style={AllStyle.Aboutdetail}>Call :+92 300 0448272</Text>
            <Text style={AllStyle.Aboutdetail}>Email: info@almanzal.ae</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

About.navigationOptions = (navData) => {
  return {
    headerTitle: () => (
      <Text
        style={{ fontSize: 16, fontFamily: 'open-sans-bold', color: '#fff' }}
      >
        About
      </Text>
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
  }
}

export default About
