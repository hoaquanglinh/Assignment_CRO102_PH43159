import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
var linkapi = 'http://10.0.2.2:3000/carts';
const ChiTietSanPham = (props) => {
  const item = props.route.params.itemChiTiet;

  const [soluong, setSoluong] = useState(1)

  const addCart = () => {
    fetch(linkapi, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        soluong: soluong,
        itemCart: item
      })
    })
      .then((res) => {
        if (res.status == 201)
          Alert.alert("Thêm thành công")
      })
      .catch((ex) => {
        console.log(ex);
      });
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ alignItems: 'center', marginTop: 50 }}>
        <Text style={{ fontSize: 25, color: '#333333', fontWeight: 'bold' }}>Chi tiết sản phẩm</Text>
      </View>
      <View style={{ width: '100%', marginTop: 20, flex: 3 }}>
        <Image style={{ width: '100%', height: '100%' }} source={{ uri: item.anh }} />
      </View>
      <View style={{ flex: 3.5, padding: 20 }}>
        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 22, color: '#333333', fontWeight: 'bold' }}>{item.ten}</Text>
        </View>
        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 22, color: 'red', fontWeight: 'bold' }}>{item.gia} đ</Text>
        </View>
        <View style={styles.view}>
          <Text style={{ fontSize: 20, color: '#222222' }}>Chi tiết sản phẩm</Text>
        </View>
        <View style={styles.view}>
          <Text style={styles.text}> Phân loại</Text>
          <Text style={styles.text}> {item.phanloai}</Text>
        </View>
        <View style={styles.view}>
          <Text style={styles.text}> Tình trạng</Text>
          <Text style={styles.text}> {item.trangthai ? 'Còn hàng' : 'Hết hàng'}</Text>
        </View>
        <View style={styles.view}>
          <Text style={styles.text}> Kích thước</Text>
          <Text style={styles.text}> {item.kichthuoc}</Text>
        </View>
      </View>
      <View style={{ flex: 0.5, justifyContent: 'space-between', backgroundColor: 'white', flexDirection: 'row' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20 }}>
          <TouchableOpacity>
            <Text style={{ marginRight: 15, color: '#444444', fontSize: 30 }}>-</Text>
          </TouchableOpacity>

          <View style={{ width: 30, alignItems: 'center' }}>
            <Text style={{ color: '#343434', fontSize: 20 }}>{soluong}</Text>
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
        <TouchableOpacity
          onPress={() => addCart()}
          style={{ height: 60, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green', borderRadius: 15 }}>
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