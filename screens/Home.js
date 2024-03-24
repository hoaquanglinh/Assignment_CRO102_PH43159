import { TextInput, FlatList, TouchableOpacity, Image, ImageBackground, StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

var linkapi = 'http://10.0.2.2:3000/products';

const Home = (props) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);

  const danhMuc = [
    { id: 1, name: 'Tất cả' },
    { id: 2, name: 'Cây cảnh' },
    { id: 3, name: 'Chậu cảnh' },
    { id: 4, name: 'Đồ trang trí' },
    { id: 5, name: 'Khác' },
  ];

  const handleCategoryPress = (item) => {
    setSelectedCategory(item.id);
    console.log(`Selected category: ${item.name}`);
  };

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => handleCategoryPress(item)}
      style={[selectedCategory === item.id && styles.selectedCategoryItem]}
    >
      <Text style={{
        marginTop: 10,
        color: selectedCategory === item.id ? 'green' : 'black',
        fontSize: selectedCategory === item.id ? 20 : 18,
        fontWeight: 'bold',
        marginRight: 15,
      }}>{item.name}</Text>
    </TouchableOpacity>
  );

  const lay_ds = async () => {
    try {
      let res = await fetch(linkapi);
      let data = await res.json();
      setProducts(data);
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

  const renderItem = ({ item }) => (
    <View style={styles.sanPham}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('ChiTietSanPham')}>
        <View style={{ padding: 5 }}>
          <Image source={{ uri: item.anh }} style={{ width: '100%', height: '62%', borderRadius: 0 }} />
          <View style={{ padding: 10, justifyContent: 'space-between' }}>
            <View style={{ height: 48 }}>
              <Text style={{ fontSize: 19, fontWeight: 'bold', color: '#1C1C1C' }}>{item.ten}</Text>
            </View>
            <Text style={{ fontSize: 20, color: 'green', fontWeight: 'bold' }}>Gía: {item.gia} đ</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground style={{ flex: 3, justifyContent: 'flex-end' }} source={{ uri: 'https://png.pngtree.com/thumb_back/fh260/background/20220314/pngtree-outdoor-tree-bonsai-photography-image_1045147.jpg' }}>
        <View style={{ marginLeft: 30, marginBottom: 10 }}>
          <Text style={{ fontSize: 35, fontWeight: 'bold', color: 'white' }}>Mang thiên nhiên</Text>
          <Text style={{ fontSize: 35, fontWeight: 'bold', color: 'white' }}>vào nhà bạn</Text>
        </View>
      </ImageBackground>
      <View style={{ marginTop: 30, width: '100%', position: 'absolute', alignItems: 'center' }}>
        <View style={{ alignItems: 'center', flexDirection: 'row', width: '90%', backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: 15 }}>
          <View style={{ marginLeft: 10 }}>
            <Icon name="search" size={27} color="black" />
          </View>
          <TextInput
            style={styles.searchInput}
            placeholder="Tìm kiếm sản phẩm"
          />
        </View>
      </View>
      <View style={{ flex: 0.5 }}>
        <FlatList
          style={{ marginLeft: 15 }}
          data={danhMuc}
          renderItem={renderCategoryItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={{ flex: 6 }}>
        <FlatList
          style={{ marginLeft: 20, marginBottom: 10 }}
          data={products}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
        />
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  selectedCategoryItem: {
    borderColor: 'transparent',
  },
  sanPham: {
    width: '45%',
    height: 250,
    backgroundColor: 'white',
    borderRadius: 5,
    marginTop: 15,
    marginRight: 20
  },
  searchInput: {
    padding: 10,
    fontSize: 17,
    color: 'black',
    marginLeft: 5
  },
})