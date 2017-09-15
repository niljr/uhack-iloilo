/**
 * Authenticate Screen
 *  - Entry screen for all authentication
 *  - User can tap to login, forget password, signup...
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text
} from 'react-native';
import { Actions } from 'react-native-router-flux';
// Consts and Libs
import { AppStyles, AppSizes, AppColors } from '@theme/';

// Components
import { Spacer, Button } from '@ui/';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  background: {
    backgroundColor: AppColors.brand.primary,
    height: AppSizes.screen.height,
    width: AppSizes.screen.width,
  },
  logo: {
    width: AppSizes.screen.width * 0.95,
    alignSelf: 'center',
    height: AppSizes.screen.height * 0.5,
    marginTop: AppSizes.screen.height * 0.15
  },
  textLogo: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    width: 300,
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 28,
    fontSize: 15,
    backgroundColor: 'transparent'
  },
  whiteText: {
    color: '#FFF',
  },
  backgroundImage: {
    flex: 1,
    height:null,
    width:null,
    alignItems: 'center'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'red',
    opacity: 0.3
  },
  signIn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#36BA8A',
    borderRadius:25,
    width: AppSizes.screen.width * 0.43,
    height: 38,
  },
  signInText: {
    color: '#FFFFFF',
  },
  signUp: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#36BA8A',
    width: AppSizes.screen.width * 0.43,
    height: 38,
    backgroundColor: 'transparent'    
  },
  signUpText: {
    color: '#36BA8A',
  },
  buttonContainer: {
    flexDirection: 'row'
  },
  button: {
    flex: 1,
    alignItems: 'center'
  }
});

/* Component ==================================================================== */
class Authenticate extends Component {
  static componentName = 'Authenticate';
  
  render = () => (
    <Image source={require('../../images/backgroundImage3.jpg')} style={styles.backgroundImage}>
      <View style={{height: AppSizes.screen.height * 0.9}}>
        <Image
          source={require('../../images/logoGreen.png')}
          style={[styles.logo]}
        />
        <Text style={styles.textLogo}>For all the moments between eating and sleeping! Rent that toy without burning a hole in your pocket.</Text>
      </View>
      
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <TouchableOpacity style={styles.signIn} onPress={Actions.login}>
            <Text style={styles.signInText}>SIGN IN</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.button}>
          <TouchableOpacity style={styles.signUp} onPress={Actions.signUp}>
            <Text style={styles.signUpText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Spacer size={10} />

    </Image>
  )
}

/* Export Component ==================================================================== */
export default Authenticate;
