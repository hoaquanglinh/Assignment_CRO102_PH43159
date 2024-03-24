import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Profile from './Profile';
import Search from './Search';
import Notification from './Notification';
import Cart from './Cart';
import Order from './Order';

const Tab = createBottomTabNavigator();

const TabNavigator = (props) => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: 'green',
      headerShown: false,
    }}>
      <Tab.Screen
        options={{
          tabBarIcon: () =>
            <Icon name="home" size={27} color="green" />
        }}
        name="Home"
        component={Home} />
      <Tab.Screen
        options={{
          tabBarIcon: () =>
            <Icon name="shopping-cart" size={27} color="green" />
        }}
        name="Cart"
        component={Cart} />
      <Tab.Screen
        options={{
          tabBarIcon: () =>
            <Icon name="list" size={27} color="green" />
        }}
        name="Order"
        component={Order} 
        initialParams={{ lsdh: 0 }}/>
      <Tab.Screen
        options={{
          tabBarIcon: () =>
            <Icon name="user" size={27} color="green" />
        }}
        name="Profile"
        component={Profile} />
    </Tab.Navigator>
  )
}

export default TabNavigator

const styles = StyleSheet.create({})