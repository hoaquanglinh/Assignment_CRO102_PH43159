import React, { useState } from 'react';
import { Switch, TextInput, Image, StyleSheet, View, StatusBar, Text, TouchableOpacity } from 'react-native';

const Login = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <Image resizeMode='stretch' style={styles.imageHeader} source={require('../assets/img/imageHeader.png')} />

      <View style={styles.section}>
        <Text style={{ color: 'black', fontSize: 30, fontWeight: 'bold', marginTop: 20 }}>Chào mừng bạn</Text>
        <Text style={{ color: 'black', fontSize: 20, marginTop: 5 }}>Đăng nhập tại khoản</Text>

        <TextInput
          style={[styles.input, { marginTop: 30 }]}
          placeholder='Nhập email hoặc số điện thoại'
          placeholderTextColor={"#606060"} />

        <View style={[styles.input, { flexDirection: 'row', padding: 0 }]}>
          <TextInput
            placeholder='Mật khẩu'
            style={{ padding: 15 }}
            // style={styles.input}
            placeholderTextColor={"#606060"}
            secureTextEntry={!showPassword} />
          <TouchableOpacity
            onPress={toggleShowPassword}
            style={{ position: 'absolute', right: 40, top: 45 }}
          >
            <Image
              source={showPassword ? require('../assets/icon/eye.png') : require('../assets/icon/eye1.png')}
              style={{ width: 24, height: 24, tintColor: 'black', position: 'absolute', bottom: 5 }}
            />
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, justifyContent: 'space-between', width: '90%' }}>
          <View style={{ flexDirection: 'row' }}>
            <Switch value={isChecked} onValueChange={handleCheckboxChange} />
            <Text style={{ color: '#828282', fontSize: 15, marginLeft: 10, marginTop: 3 }}>Nhớ mật khẩu</Text>
          </View>
          <TouchableOpacity>
            <Text style={{ color: 'green', fontSize: 15, fontWeight: 'bold', fontStyle: 'italic' }}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Tabnavigator')}
            style={[styles.button, { marginTop: 25 }]}>
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
          <Text style={{ fontSize: 17, color: 'black', marginRight: 10 }}>Bạn không có tài khoản?</Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('Register')}>
            <Text style={{ fontSize: 17, color: 'green' }}>Tạo tài khoản</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  imageHeader: {
    marginTop: -25,
    width: '100%',
    height: '35%',
    // position: 'absolute',
  },
  section: {
    alignItems: 'center'
  },
  input: {
    marginTop: 20,
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