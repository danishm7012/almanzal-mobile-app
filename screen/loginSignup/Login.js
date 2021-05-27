import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import React, { useState } from 'react'

import Color from '../../constants/Colors'
import HeaderButton from '../../component/headerbutton/HeaderButton'

let { width: screenWidth, height: screenHeight } = Dimensions.get('window')

function Login(navData) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <ScrollView>
      <View style={{ height: screenHeight, backgroundColor: '#121212' }}>
        <View
          style={{
            flex: 0.1,
            paddingTop: 80,
            backgroundColor: '#fff',
            borderBottomRightRadius: 70,
            borderBottomLeftRadius: 70,
          }}
        >
          <Text
            style={{
              fontFamily: 'open-sans-bold',
              color: '#121212',
              fontSize: 24,
              textAlign: 'center',
            }}
          >
            LogIn
          </Text>
        </View>

        <View
          style={{
            flex: 0.8,
            alignSelf: 'stretch',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#121212',
          }}
        >
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Email."
              placeholderTextColor="#003f5c"
              onChangeText={(email) => setEmail(email)}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Password."
              placeholderTextColor="#003f5c"
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
            />
          </View>
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navData.navigation.goBack()
            }}
            style={styles.loginBtn}
          >
            <Text style={styles.loginText}>Cancel</Text>
          </TouchableOpacity>
          <Text style={{ padding: 5, color: '#fff', fontFamily: 'open-sans' }}>
            First
            <Text
              onPress={() => {
                navData.navigation.navigate('Sign_Up')
              }}
              style={{
                fontFamily: 'open-sans-bold',
                color: Color.primaryColour,
                textDecorationLine: 'underline',
                letterSpacing: 1,
              }}
            >
              Register
            </Text>
            Your Self
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}

Login.navigationOptions = (navData) => {
  return {
    headerTitle: <Image source={require('../../assets/realestatelogo.png')} />,
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Back Button"
          iconName="arrow-back"
          onPress={() => {
            navData.navigation.goBack()
          }}
        />
      </HeaderButtons>
    ),
  }
}

export default Login
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },

  inputView: {
    backgroundColor: '#fff',
    width: '80%',
    height: 45,
    marginBottom: 20,
    alignItems: 'flex-start',
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  loginBtn: {
    width: '60%',
    borderRadius: 25,
    height: 50,

    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderWidth: 1,
    borderColor: Color.primaryColour,
    backgroundColor: '#fff',
  },
  loginText: {
    color: '#121212',
    fontSize: 18,
  },
})
