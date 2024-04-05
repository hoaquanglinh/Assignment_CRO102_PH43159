import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux';
import store from './screens/Redux/store';

import Login from './screens/Login'
import Wellcome from './screens/Wellcome';
import Register from './screens/Register';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import TabNavigator from './screens/TabNavigator';
import ThongTinCaNhan from './screens/ThongTinCaNhan';
import Profile from './screens/Profile';
import LichSuDonHang from './screens/LichSuGiaoDich';
import ThanhToan from './screens/ThanhToan';
import ChiTietSanPham from './screens/ChiTietSanPham';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View>
        <StatusBar backgroundColor={'white'} />
      </View>

      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Wellcome" component={Wellcome} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Tabnavigator" component={TabNavigator} />
          <Stack.Screen name="ThongTinCaNhan" component={ThongTinCaNhan} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="LichSuDonHang" component={LichSuDonHang}/>
          <Stack.Screen name="ThanhToan" component={ThanhToan}/>
          <Stack.Screen name="ChiTietSanPham" component={ChiTietSanPham}/>
        </Stack.Navigator>
      </NavigationContainer>

    </View>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})