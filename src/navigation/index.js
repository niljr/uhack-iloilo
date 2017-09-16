/**
 * App Navigation
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React from 'react';
import { Actions, Scene, ActionConst } from 'react-native-router-flux';

// Consts and Libs
import { AppConfig } from '@constants/';
import { AppColors, AppStyles } from '@theme/';
import Icon from 'react-native-vector-icons/Ionicons';

// Components
import Drawer from '@containers/ui/DrawerContainer';
import { NavbarMenuButton } from '@containers/ui/NavbarMenuButton/NavbarMenuButtonContainer';

// Scenes
import AppLaunch from '@containers/Launch/LaunchContainer';
import Placeholder from '@components/general/Placeholder';
import Landing from '@containers/landing/LandingView';
import Product from '@containers/product/ProductView';
import AuthScenes from './auth';
import TabsScenes from './tabs';

/* Routes ==================================================================== */
export default Actions.create(
  <Scene key={'root'} {...AppConfig.navbarProps}>
    <Scene
      hideNavBar
      key={'splash'}
      component={AppLaunch}
      analyticsDesc={'AppLaunch: Launching App'}
    />

    {/* Auth */}
    {AuthScenes}

    {/* Main App */}
    <Scene key={'app'} {...AppConfig.navbarProps} title={AppConfig.appName} hideNavBar={false} type={ActionConst.RESET}>
      {/* Drawer Side Menu */}
      <Scene key={'home'} component={Drawer}>
        {/* Content */}
        <Scene key={'drawerWrapper'} >
          <Scene
            key={'landing'}
            {...AppConfig.navbarProps}
            title={''}
            component={Landing}
            analyticsDesc={'Placeholder: Coming Soon'}
            renderLeftButton={() => <NavbarMenuButton />}
            renderRightButton={() => (
              <Icon 
                name={'md-basket'} 
                size={30} 
                color={AppColors.brand.primary} 
                style={[...AppStyles.containerCentered,{ top: -2 }]}
              />
            )}         
            initial   
          />
          {TabsScenes}
          <Scene 
            {...AppConfig.navbarProps}
            key="product" 
            component={Product} 
            title="Product" 
          />
        </Scene>
      </Scene>
    </Scene>
  </Scene>,
);
