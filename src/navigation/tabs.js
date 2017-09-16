/**
 * Tabs Scenes
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React from 'react';
import { Scene } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';

// Consts and Libs
import { AppConfig } from '@constants/';
import { AppColors, AppStyles, AppSizes } from '@theme/';

// Components
import { TabIcon } from '@ui/';
import { NavbarMenuButton } from '@containers/ui/NavbarMenuButton/NavbarMenuButtonContainer';

// Scenes
import Toys from '@containers/toys/ToysView';
import Box from '@containers/box/BoxView';

const navbarPropsTabs = {
  ...AppConfig.navbarProps,
  renderLeftButton: () => <NavbarMenuButton />,
  sceneStyle: {
    ...AppConfig.navbarProps.sceneStyle,
    paddingBottom: AppSizes.tabbarHeight,
  },
};

/* Routes ==================================================================== */
const scenes = (
  <Scene key={'tabBar'} tabs 
    tabBarPosition="top"
    tabBarIconContainerStyle={AppStyles.tabbar} 
    pressOpacity={0.95}
  >
    <Scene
      key={'toys'}
      {...navbarPropsTabs}
      title={'You choose'}
      component={Toys}
      icon={props => TabIcon({ ...props, icon: 'ios-jet' })}
      analyticsDesc={'You choose'}
      renderRightButton={() => (
        <Icon 
          name={'md-basket'} 
          size={30} 
          color={AppColors.brand.primary} 
          style={[...AppStyles.containerCentered,{ top: -2 }]}
        />
      )}    
    />

    <Scene
      key={'package'}
      {...navbarPropsTabs}
      title={'Package'}
      component={Box}
      icon={props => TabIcon({ ...props, icon: 'ios-cube' })}
      analyticsDesc={'Package'}
      renderRightButton={() => (
        <Icon 
          name={'md-basket'} 
          size={30} 
          color={AppColors.brand.primary} 
          style={[...AppStyles.containerCentered,{ top: -2 }]}
        />
      )}    
    />
  </Scene>
);

export default scenes;
