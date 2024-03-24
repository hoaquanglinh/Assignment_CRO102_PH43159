import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Profile = (props) => {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <View style={{ marginTop: 30, alignItems: 'center' }}>
        <Text style={{ fontSize: 22, color: '#333333' }}>PROFILE</Text>
      </View>
      <View style={{ marginTop: 40, marginLeft: 15, marginBottom: 20, flexDirection: 'row' }}>
        <Image style={{ width: 60, height: 60, borderRadius: 50 }} source={require('../assets/img/avatar.png')} />
        <View style={{ marginLeft: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#444444' }}>Hòa Quang Linh</Text>
          <Text style={{ marginTop: 5, fontSize: 17 }}>linhhqph43159@fpt.edu.vn</Text>
        </View>
      </View>
      <View >
        <View style={{ marginTop: 20, borderBottomColor: "#444444", borderBottomWidth: 1 }}>
          <Text style={{ fontSize: 18, color: '#555555', marginBottom: 5 }}>Chung</Text>
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('ThongTinCaNhan')}>
          <Text style={styles.text}>Chỉnh sửa thông tin cá nhân</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('LichSuDonHang')}>
          <Text style={styles.text}>Lịch sử giao dịch</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('ThanhToan')}>
          <Text style={styles.text}>Thanh toán</Text>
        </TouchableOpacity>

        <View style={{ marginTop: 50, borderBottomColor: "#444444", borderBottomWidth: 1 }}>
          <Text style={{ fontSize: 18, color: '#555555', marginBottom: 5 }}>Bảo mật và điều khoản</Text>
        </View>
        <Text style={styles.text}>Điều khoản và điều kiện</Text>
        <Text style={styles.text}>Chính sách quyền riêng tư</Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Login')}>
          <Text style={{ marginTop: 25, fontSize: 20, fontWeight: 'bold', color: 'red' }}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: '#333333',
    marginTop: 20,
    fontWeight: 'bold'
  }
})