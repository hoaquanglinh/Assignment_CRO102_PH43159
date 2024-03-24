import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ChiTietSanPham = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ alignItems: 'center', marginTop: 50 }}>
        <Text style={{ fontSize: 25, color: '#333333', fontWeight: 'bold' }}>Chi tiết sản phẩm</Text>
      </View>
      <View style={{ width: '100%', marginTop: 20, flex: 3 }}>
        <Image style={{ width: '100%', height: '100%' }} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Trident_Maple_bonsai_52%2C_October_10%2C_2008.jpg' }} />
      </View>
      <View style={{ flex: 3.5, padding: 20 }}>
        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 22, color: '#333333', fontWeight: 'bold' }}>Cây phong lá đỏ</Text>
        </View>
        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 22, color: 'red', fontWeight: 'bold' }}>200000 đ</Text>
        </View>
        <View style={styles.view}>
          <Text style={{ fontSize: 20, color: '#222222' }}>Chi tiết sản phẩm</Text>
        </View>
        <View style={styles.view}>
          <Text style={styles.text}> Phân loại</Text>
          <Text style={styles.text}> Cây cảnh</Text>
        </View>
        <View style={styles.view}>
          <Text style={styles.text}> Tình trạng</Text>
          <Text style={styles.text}> Còn hàng</Text>
        </View>
        <View style={styles.view}>
          <Text style={styles.text}> Kích thước</Text>
          <Text style={styles.text}> 70x80</Text>
        </View>
      </View>
      <View style={{ flex: 0.5, justifyContent: 'space-between', backgroundColor: 'white', flexDirection: 'row' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20 }}>
          <TouchableOpacity>
            <Text style={{ marginRight: 15, color: '#444444', fontSize: 30 }}>-</Text>
          </TouchableOpacity>

          <View style={{ width: 30, alignItems: 'center' }}>
            <Text style={{ color: '#343434', fontSize: 20 }}>0</Text>
          </View>

          <TouchableOpacity >
            <Text style={{ marginLeft: 15, color: '#444444', fontSize: 23 }}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginRight: 15 }}>
          <Text style={{ fontSize: 23, color: 'red', fontWeight: 'bold' }}>500000 đ</Text>
        </View>
      </View>
      <View style={{ flex: 0.8, backgroundColor: 'white', padding: 20 }}>
        <TouchableOpacity style={{ height: 60, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green', borderRadius: 15 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>THÊM VÀO GIỎ HÀNG</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => props.navigation.goBack()}
        style={{ position: 'absolute', top: 55, left: 20 }}>
        <Image style={{ width: 20, height: 20 }} source={require('../assets/icon/back.png')} />
      </TouchableOpacity>
    </View>
  )
}
export default ChiTietSanPham

const styles = StyleSheet.create({
  view: {
    borderBottomWidth: 1,
    borderBlockColor: '#333333',
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text: {
    fontSize: 18,
    color: '#333333'
  }
})