import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const ThongTinCaNhan = (props) => {
    return (
        <View style={{ flex: 1, padding: 20 }}>
            <View style={{flex: 14}}>
                <View style={{ width: '100%', alignItems: 'center', marginTop: 30 }}>
                    <Text style={{ color: '#333333', fontSize: 23, fontWeight: 'bold' }}>Chỉnh sửa thông tin</Text>
                </View>
                <View style={{ width: '100%', alignItems: 'center', marginTop: 40 }}>
                    <Image style={{ width: 100, height: 100, borderRadius: 50 }} source={require('../assets/img/avatar.png')} />
                </View>
                <View style={{ marginTop: 70, borderBottomColor: "#444444", borderBottomWidth: 1 }}>
                    <TextInput value='Hòa Quang Linh' style={{ fontSize: 18, color: '#555555' }} />
                </View>
                <View style={{ marginTop: 20, borderBottomColor: "#444444", borderBottomWidth: 1 }}>
                    <TextInput value='linhhqph43159@fpt.edu.vn' style={{ fontSize: 18, color: '#555555' }} />
                </View>
                <View style={{ marginTop: 20, borderBottomColor: "#444444", borderBottomWidth: 1 }}>
                    <TextInput value='Xuân Phương, Nam Từ Liêm, Hà Nội' style={{ fontSize: 18, color: '#555555' }} />
                </View>
                <View style={{ marginTop: 20, borderBottomColor: "#444444", borderBottomWidth: 1 }}>
                    <TextInput value='0234768354' style={{ fontSize: 18, color: '#555555' }} />
                </View>

                <TouchableOpacity
                    onPress={() => props.navigation.goBack()}
                    style={{ position: 'absolute', top: 35 }}>
                    <Image style={{ width: 20, height: 20 }} source={require('../assets/icon/back.png')} />
                </TouchableOpacity>
            </View>
            <View style={{flex: 1, backgroundColor: '#555555', justifyContent: 'center', borderRadius: 15}}>
                <TouchableOpacity style={{alignItems: 'center'}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>LƯU THÔNG TIN</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ThongTinCaNhan

const styles = StyleSheet.create({})