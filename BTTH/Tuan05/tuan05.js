import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import noi from './assets/noi.PNG';
import khoga from './assets/khoga.PNG';
import dochoi from './assets/dochoi.PNG';
import xetai from './assets/xetai.PNG';
import lanhdao from './assets/lanhdao.PNG';
import sach from './assets/sach.PNG';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.back}><Ionicons name="arrow-back-outline" size={24} color="white" /></Text>
        <Text style={styles.title}>Chat</Text>
        <Text style={styles.cart}><AntDesign name="shopping-cart" size={24} color="white" /></Text>
      </View>
        <Text style={styles.nav}>Bạn thắc mắc với sản phẩm vừa xem. Đừng ngại chát với shop</Text>
      <ScrollView style={styles.list}>
        {products.map((item, index) => (
          <View key={index} style={styles.item}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.shop}>Shop {item.shop}</Text>
            </View>
            <TouchableOpacity style={styles.chatBtn}>
              <Text style={styles.chatText}>Chat</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <View style={styles.bottomNav}>
        <Text style={styles.navBtn}><AntDesign name="menu" size={24} color="white" /></Text>
        <Text style={styles.navBtn}><Entypo name="home" size={24} color="white" /></Text>
        <Text style={styles.navBtn}><Ionicons name="arrow-back-outline" size={24} color="white" /></Text>
      </View>
    </View>
  );
}
const products = [
  { name: 'Ca nấu lẩu, nấu mì mini', shop: 'Devant', image: noi },
  { name: '1KG Khô gà bơ tỏi', shop: 'LTD Food', image: khoga },
  { name: 'Xe cần cẩu đa năng', shop: 'Thế giới đồ chơi', image: dochoi },
  { name: 'Đồ chơi dạng mô hình', shop: 'Thế giới đồ chơi', image: xetai },
  { name: 'Lãnh đạo giản đơn', shop: 'Minh Long Book', image: lanhdao },
  { name: 'Hiểu lòng con trẻ', shop: 'Minh Long Book', image: sach },
];

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#00aaff',
    padding: 20,
    marginTop : 35,
  },
  nav : {
    padding: 20
  },
  back: { fontSize: 20, color: '#fff' },
  title: { fontSize: 18, fontWeight: 'bold', color: '#fff' },
  cart: { fontSize: 20, color: '#fff' },

  list: { flex: 1 },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  image: { width: 60, height: 60, borderRadius: 5 },
  info: { flex: 1, marginLeft: 10 },
  name: { fontSize: 14, fontWeight: 'bold' },
  shop: { fontSize: 12, color: 'gray' },
  chatBtn: { backgroundColor: 'red', padding: 8, borderRadius: 4 },
  chatText: { color: '#fff', fontWeight: 'bold' },

  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: '#00aaff',
  },
  navBtn: { fontSize: 20, color: '#fff' },
});
