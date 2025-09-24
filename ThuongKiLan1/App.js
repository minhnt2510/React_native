import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AntDesign from '@expo/vector-icons/AntDesign';
import DetailsScreen from "./components/DetailsScreen";

import redPhone from './assets/colorPhone/redphone.PNG';
import blackPhone from './assets/colorPhone/blackphone.PNG';
import bluePhone from './assets/colorPhone/bluephone.PNG';
import whitePhone from './assets/colorPhone/whitephone.PNG';

const COLOR_MAP = {
  red: redPhone,
  black: blackPhone,
  blue: bluePhone,
  white: whitePhone,
};

const product = {
  id: 1,
  name: 'Điện Thoại Vsmart Joy 3 - Hàng chính hãng',
  price: '1.790.000 đ',
  oldPrice: '1.790.000 đ',
  ratingCount: 828,
  colorsCount: 4,
};

function HomeScreen({ navigation }) {
  const [selectedColor, setSelectedColor] = useState('blue');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <View style={styles.imageWrap}>
          <Image style={styles.productImage} source={COLOR_MAP[selectedColor]} />
        </View>

        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.title}>
          {product.name}
        </Text>

        <View style={styles.ratingRow}>
          {[...Array(5)].map((_, i) => (
            <AntDesign key={i} name="star" size={18} color="#E0E41A" style={{ marginRight: 2 }} />
          ))}
          <Text style={styles.reviewText}>(Xem {product.ratingCount} đánh giá)</Text>
        </View>

        <View style={styles.priceRow}>
          <View style={styles.priceBadge}>
            <Text style={styles.priceText}>{product.price}</Text>
          </View>
          <Text style={styles.oldPrice}>{product.oldPrice}</Text>
        </View>

        <Text style={styles.noteText}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>

        <TouchableOpacity
          style={styles.optionBtn}
          activeOpacity={0.8}
          onPress={() =>
            navigation.navigate('Details', {
              product,
              selectedColor,               
              onPickColor: setSelectedColor,  
            })
          }
        >
          <Text style={styles.optionBtnText}>{product.colorsCount} MÀU - CHỌN MÀU</Text>
          <AntDesign name="right" size={16} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buyBtn}
          activeOpacity={0.9}
          onPress={() => navigation.navigate('Details', { product, selectedColor, onPickColor: setSelectedColor })}
        >
          <Text style={styles.buyBtnText}>CHỌN MUA</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Trang chủ" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const CARD_WIDTH = 300;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#eee',
    paddingVertical: 16,
  },
  card: {
    width: CARD_WIDTH,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  imageWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  productImage: {
    width: CARD_WIDTH - 40,
    height: 240,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 13,
    fontWeight: '600',
    marginTop: 10,
    lineHeight: 18,
    color: '#111',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  reviewText: {
    marginLeft: 8,
    color: '#666',
    fontSize: 12,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    gap: 10,
  },
  priceBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 3,
    backgroundColor: '#fff',
  },
  priceText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#111',
  },
  oldPrice: {
    color: '#9b9b9b',
    textDecorationLine: 'line-through',
    fontSize: 14,
  },
  noteText: {
    color: '#d0021b',
    fontSize: 12,
    marginTop: 6,
    fontWeight: '700',
  },
  optionBtn: {
    marginTop: 10,
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optionBtnText: {
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  buyBtn: {
    marginTop: 12,
    backgroundColor: '#CA1536',
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  buyBtnText: {
    color: '#fff',
    fontWeight: '800',
    letterSpacing: 0.5,
  },
});
