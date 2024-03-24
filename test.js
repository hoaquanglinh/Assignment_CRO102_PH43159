import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Animated, Platform, Image } from 'react-native';

const Home = () => {
  const [scrollY] = useState(new Animated.Value(0));
  const [showFooter, setShowFooter] = useState(false);

  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [0, -100],
    extrapolate: 'clamp',
  });

  const data = [
    {id: 1, ten: "linh"},
    {id: 2, ten: "linh"},
    {id: 3, ten: "linh"},
    {id: 4, ten: "linh"},
    {id: 5, ten: "linh"}
  ];

  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.ten}</Text>
      <Image style={styles.itemImage} source={require('../assets/img/imageHeader.png')} />
    </View>
  );

  const handleScroll = (event) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    const isEnd = layoutMeasurement.height + contentOffset.y >= contentSize.height;
    setShowFooter(isEnd);
  };

  return (
    <View style={styles.container}>
      <View style={StyleSheet.absoluteFill}>
        <Animated.View style={[styles.header, { transform: [{ translateY: headerTranslateY }] }]}>
          <Text style={styles.headerText}>Header</Text>
        </Animated.View>
      </View>

      <Animated.FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true, listener: handleScroll }
        )}
        scrollEventThrottle={16}
        style={{ zIndex: 1, paddingTop: 60 }} 
      />

      {showFooter && (
        <View style={styles.footer}>
          <Text style={styles.footerText}>Footer</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 60,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: Platform.OS === 'android' ? 50 : 0,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 20,
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    color: 'black',
  },
  itemImage: {
    width: 80,
    height: 200,
  },
  footer: {
    height: 40,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
  },
});

export default Home;
