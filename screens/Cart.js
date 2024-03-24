import { Image, TouchableOpacity, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

var linkapi = 'http://10.0.2.2:3000/carts';

const Cart = (props) => {
  const [cart, setCart] = useState([]);

  const lay_ds = async () => {
    try {
      let res = await fetch(linkapi);
      let data = await res.json();
      setCart(data);
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      lay_ds();
    });

    return unsubscribe;
  }, [props.navigation]);

  const trangThai = (trangThai) => {
    if (trangThai == true) {
      return "Còn hàng"
    } else {
      return "Hết hàng"
    }
  }

  const cartView = ({ item }) => (
    <View>
      <View style={{ backgroundColor: 'white', height: 160, marginTop: 15, flexDirection: 'row' }}>
        <View style={{ flex: 1.8 }}>
          <Image style={{ width: '100%', height: '100%' }} source={{ uri: item.anh }} />
        </View>
        <View style={{ flex: 2.5, marginLeft: 20, marginTop: 5 }}>
          <View style={{ height: 60 }}>
            <Text style={{ color: '#343434', fontSize: 23, fontWeight: 'bold' }}>{item.ten}</Text>
          </View>

          <View style={{ justifyContent: 'center' }}>
            <Text style={{ color: 'red', fontSize: 22, fontWeight: 'bold' }}>{item.gia} đ</Text>
          </View>

          <Text style={{ fontSize: 17, marginTop: 3 }}>Trạng thái: {trangThai(item.trangthai)}</Text>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TouchableOpacity>
                <Text style={{ marginRight: 15, color: '#444444', fontSize: 30 }}>-</Text>
              </TouchableOpacity>

              <View style={{ width: 50, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#343434', fontSize: 20 }}>{item.soluong}</Text>
              </View>

              <TouchableOpacity>
                <Text style={{ marginLeft: 15, color: '#444444', fontSize: 23 }}>+</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={{ marginRight: 10 }}>
              <Text style={{ color: '#343434', fontSize: 18, color: 'red' }}>Xóa</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )

  return (
    <View style={{ flex: 1 }}>
      <View style={{flex: 12}}>
        <FlatList
          data={cart}
          renderItem={cartView}
          style={{ paddingLeft: 10, paddingRight: 10, paddingTop: 10, marginTop: 20, }}
        />
      </View>
      <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Text style={{marginLeft: 20, fontSize: 20, fontWeight: 'bold', color: 'red'}}>Tổng tiền: </Text>
        <TouchableOpacity style={{marginRight: 10, width: 150, height: 50, justifyContent: 'center', backgroundColor: 'green', borderRadius: 15}}>
          <Text style={{marginLeft: 20, fontSize: 20, fontWeight: 'bold', color: 'white'}}>Thanh toán</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({})