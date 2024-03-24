import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

const ThanhToan = (props) => {
    return (
        <View style={{ flex: 1, padding: 20 }}>
            <View style={{ flex: 6 }}>
                <ScrollView >
                    <View style={{ width: '100%', alignItems: 'center', marginTop: 30 }}>
                        <Text style={{ color: '#333333', fontSize: 23, fontWeight: 'bold' }}>Thanh toán</Text>
                    </View>
                    <View style={{ marginTop: 40, borderBottomColor: "#444444", borderBottomWidth: 1 }}>
                        <Text style={{ fontSize: 22, color: '#333333', marginBottom: 5, fontWeight: 'bold' }}>Thông tin khách hàng</Text>
                    </View>
                    <View style={{ marginTop: 15, borderBottomColor: "#444444", borderBottomWidth: 1 }}>
                        <TextInput value='Hòa Quang Linh' style={{ fontSize: 18, color: '#555555' }} />
                    </View>
                    <View style={{ marginTop: 15, borderBottomColor: "#444444", borderBottomWidth: 1 }}>
                        <TextInput value='linhhqph43159@fpt.edu.vn' style={{ fontSize: 18, color: '#555555' }} />
                    </View>
                    <View style={{ marginTop: 15, borderBottomColor: "#444444", borderBottomWidth: 1 }}>
                        <TextInput value='Xuân Phương, Nam Từ Liêm, Hà Nội' style={{ fontSize: 18, color: '#555555' }} />
                    </View>
                    <View style={{ marginTop: 15, borderBottomColor: "#444444", borderBottomWidth: 1 }}>
                        <TextInput value='0234768354' style={{ fontSize: 18, color: '#555555' }} />
                    </View>

                    <View style={{ marginTop: 50, borderBottomColor: "#444444", borderBottomWidth: 1 }}>
                        <Text style={{ fontSize: 22, color: '#333333', marginBottom: 5, fontWeight: 'bold' }}>Hình thức thanh toán</Text>
                    </View>
                    <View style={{ marginTop: 15, borderBottomColor: "#444444", borderBottomWidth: 1 }}>
                        <Text style={{ fontSize: 20, color: '#333333', marginBottom: 5 }}>Thanh toán khi nhận hàng</Text>
                    </View>
                    <View style={{ marginTop: 15, borderBottomColor: "#444444", borderBottomWidth: 1 }}>
                        <Text style={{ fontSize: 20, color: '#333333', marginBottom: 5 }}>Thẻ ATM</Text>
                    </View>

                    <TouchableOpacity
                        onPress={() => props.navigation.goBack()}
                        style={{ position: 'absolute', top: 35 }}>
                        <Image style={{ width: 20, height: 20 }} source={require('../assets/icon/back.png')} />
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <View style={{ flex: 1, borderRadius: 15 }}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: "#333333", fontSize: 22}}>Tổng tiền: </Text>
                <Text style={{color: 'red', fontSize: 22, fontWeight: 'bold'}}>5000000 đ</Text>
                </View>
                <TouchableOpacity style={{ borderRadius: 15, height: 60, marginTop: 20, alignItems: 'center', backgroundColor: 'green', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Thanh toán</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ThanhToan

const styles = StyleSheet.create({})