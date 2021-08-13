import {
  Button,
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

function SignUp(navData) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [confirmpassword, setConfirmPassword] = useState('')

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
            SignUp
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            alignSelf: 'stretch',
            justifyContent: 'center',
            alignItems: 'center',
            borderTopRightRadius: 70,
            borderTopLeftRadius: 70,
            backgroundColor: '#121212',

            elevation: 32,
          }}
        >
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder='Name...'
              placeholderTextColor='#003f5c'
              onChangeText={(email) => setName(email)}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder='Email...'
              placeholderTextColor='#003f5c'
              secureTextEntry={true}
              onChangeText={(password) => setEmail(password)}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder='Password...'
              placeholderTextColor='#003f5c'
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder='Confirm Password.'
              placeholderTextColor='#003f5c'
              secureTextEntry={true}
              onChangeText={(password) => setConfirmPassword(password)}
            />
          </View>
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText}>REGISTER</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navData.navigation.goBack()
            }}
            style={styles.loginBtn}
          >
            <Text style={styles.loginText}>LogIn</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}
SignUp.navigationOptions = (navData) => {
  return {
    headerTitle: () => (
      <Image source={require('../../assets/realestatelogo.png')} />
    ),
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Back Button'
          iconName='arrow-back'
          onPress={() => {
            navData.navigation.goBack()
          }}
        />
      </HeaderButtons>
    ),
  }
}

export default SignUp
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputView: {
    backgroundColor: '#fff',
    width: '90%',
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
    height: 50,
    borderRadius: 30,

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
