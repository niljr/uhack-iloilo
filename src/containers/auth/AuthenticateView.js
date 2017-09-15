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
    height: 300
  },
  textLogo: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    width: 300,
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 28,
    fontSize: 15

  },
  whiteText: {
    color: '#FFF',
  },
  backgroundImage: {
    flex: 1,
    height:null,
    width:null,
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
    backgroundColor: '#FFFFFF',
    borderRadius:25,
    width: 150,
    height: 38,
  },
  signInText: {
    color: '#36BA8A',
  },
  signUp: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    width: 150,
    height: 38,
  },
  signUpText: {
    color: '#FFFFFF',
  }
  
});

/* Component ==================================================================== */
class Authenticate extends Component {
  static componentName = 'Authenticate';
  
  render = () => (
    // <View style={[AppStyles.containerCentered, AppStyles.container, styles.background]}>
    <Image source={require('../../images/backgroundImage2.jpg')} style={styles.backgroundImage}>
      <View style={styles.overLay} />

      <Spacer size={60} />
      
      <Image
        source={require('../../images/logoWhite.png')}
        style={[styles.logo]}
      />


      <View>
        <Text style={styles.textLogo}>For all the moments between eating and sleeping! Rent that toy without burning a hole in your pocket.</Text>
      </View>

      <Spacer size={110} />
      
      <View style={[AppStyles.row, AppStyles.paddingHorizontal]}>
        <View style={[AppStyles.flex1]}>
          <TouchableOpacity style={styles.signIn} onPress={Actions.login}>
            <Text style={styles.signInText}>SIGN IN</Text>
          </TouchableOpacity>
        </View>

      <Spacer size={10} />

        <View style={[AppStyles.flex1]}>
          {/* <Button
            title={'SIGN UP'}
            containerViewStyle={{borderRadius:25}}
            buttonStyle={{ borderWidth: 1, borderColor: 'white'}}
            color={'white'}
            onPress={Actions.signUp}
            backgroundColor={'rgba(255,255,255,0.2)'}
          /> */}
          <TouchableOpacity style={styles.signUp} onPress={Actions.signUp}>
            <Text style={styles.signUpText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Spacer size={10} />

      {/* <Text p style={[AppStyles.textCenterAligned, styles.whiteText]}>
        - or -
      </Text>

      <Spacer size={10} />

      <View style={[AppStyles.row, AppStyles.paddingHorizontal]}>
        <View style={[AppStyles.flex1]} />
        <View style={[AppStyles.flex2]}>
          <Button
            small
            title={'Skip'}
            onPress={Actions.app}
            raised={false}
            backgroundColor={'rgba(255,255,255,0.2)'}
          />
        </View>
        <View style={[AppStyles.flex1]} />
      </View>

      <Spacer size={40} /> */}
      </Image>

    // </View>
  )
}

/* Export Component ==================================================================== */
export default Authenticate;
