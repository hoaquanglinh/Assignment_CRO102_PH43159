import { Switch, TextInput, Image, StyleSheet, View, StatusBar, Text, TouchableOpacity } from 'react-native';
import React from 'react'

const Register = (props) => {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />

      <Image resizeMode='stretch' style={styles.imageHeader} source={require('../assets/img/imageHeader1.png')} />

      <TouchableOpacity
        onPress={() => props.navigation.navigate('Login')}
        style={{ position: 'absolute', top: 40, left: 15, width: 30, height: 30, borderRadius: 10, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
        <Image style={{ width: '80%', height: '80%' }} source={require('../assets/icon/back.png')} />
      </TouchableOpacity>

      <View style={styles.section}>
        <Text style={{ color: 'black', fontSize: 35, fontWeight: 'bold', marginTop: 20 }}>Đăng ký</Text>
        <Text style={{ color: 'black', fontSize: 20, marginTop: 5 }}>Tạo tài khoản</Text>

        <TextInput
          style={[styles.input, { marginTop: 30 }]}
          placeholder='Họ tên'
          placeholderTextColor={"#606060"} />

        <TextInput
          style={styles.input}
          placeholder='Email'
          placeholderTextColor={"#606060"} />

        <TextInput
          style={styles.input}
          placeholder='Số điện thoại'
          placeholderTextColor={"#606060"} />

        <View style={[styles.input, { flexDirection: 'row', padding: 0 }]}>
          <TextInput
            placeholder='Mật khẩu'
            style={{ padding: 15 }}
            // style={styles.input}
            placeholderTextColor={"#606060"} />
        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
          <TouchableOpacity style={[styles.button, { marginTop: 25 }]}>
            <Text style={{ color: 'white', fontSize: 20, fontWeight: "bold" }}>Đăng nhập</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.lineContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>Hoặc</Text>
          <View style={styles.line} />
        </View>

        <View style={{ flexDirection: 'row', marginTop: 15 }}>
          <TouchableOpacity>
            <Image style={[styles.iconLogin, { marginRight: 40 }]} source={require('../assets/icon/google.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.iconLogin} source={require('../assets/icon/facebook.png')} />
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', marginTop: 25 }}>
          <Text style={{ fontSize: 17, color: 'black', marginRight: 5 }}>Tôi đã có tài khoản.</Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
            <Text style={{ fontSize: 17, color: 'green' }}>Đăng nhập</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  imageHeader: {
    marginTop: -25,
    width: '100%',
    height: '24%',
    // position: 'absolute',
  },
  section: {
    alignItems: 'center'
  },
  input: {
    marginTop: 15,
    height: 55,
    width: '90%',
    borderWidth: 1,
    padding: 15,
    borderColor: '#606060',
    color: '#606060',
    fontSize: 16,
    borderRadius: 13,
  },
  button: {
    backgroundColor: 'green',
    height: 60,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 17
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    width: '90%',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
  },
  orText: {
    marginHorizontal: 10,
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black'
  },
  iconLogin: {
    width: 40,
    height: 40
  }
});