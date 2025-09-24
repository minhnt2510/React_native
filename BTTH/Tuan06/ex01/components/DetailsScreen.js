import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
const COLOR_OPTIONS = [
  { key: 'white', label: 'trắng',
    swatch: require('../assets/colorImage/color1.PNG'),
    phone:  require('../assets/colorPhone/whitephone.PNG') },
  { key: 'red', label: 'đỏ',
    swatch: require('../assets/colorImage/color2.PNG'),
    phone:  require('../assets/colorPhone/redphone.PNG') },
  { key: 'black', label: 'đen',
    swatch: require('../assets/colorImage/color3.PNG'),
    phone:  require('../assets/colorPhone/blackphone.PNG') },
  { key: 'blue', label: 'xanh dương',
    swatch: require('../assets/colorImage/color4.PNG'),
    phone:  require('../assets/colorPhone/bluephone.PNG') },
];

export default function DetailsScreen({ route, navigation }) {
  const { product, selectedColor = 'red', onPickColor } = route.params || {};
  const [selectedKey, setSelectedKey] = useState(selectedColor);
  const selected = COLOR_OPTIONS.find(c => c.key === selectedKey) ?? COLOR_OPTIONS[0];
  const handleDone = () => {
    if (typeof onPickColor === 'function') onPickColor(selectedKey);
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.headerCard}>
        <Image source={selected.phone} style={styles.thumb} />
        <View style={{ flex: 1 }}>
          <Text style={styles.name} numberOfLines={2}>
            {product?.name ?? 'Điện Thoại Vsmart Joy 3 - Hàng chính hãng'}
          </Text>
          <Text style={styles.meta}>Màu: <Text style={{ fontWeight: '700' }}>{selected.label}</Text></Text>
          <Text style={styles.meta}>Cung cấp bởi <Text style={{ fontWeight: '700' }}>Tiki Trading</Text></Text>
          <Text style={styles.price}>{product?.price ?? '1.790.000 đ'}</Text>
        </View>
      </View>

      <View style={styles.grayArea}>
        <Text style={styles.chooseLabel}>Chọn một màu bên dưới:</Text>

        <View style={styles.colorsColumn}>
          {COLOR_OPTIONS.map(c => {
            const isActive = c.key === selectedKey;
            return (
              <TouchableOpacity
                key={c.key}
                activeOpacity={0.8}
                onPress={() => setSelectedKey(c.key)}
                style={[styles.swatchWrap, isActive && styles.swatchActiveWrap]}
              >
                <Image source={c.swatch} style={styles.swatch} />
              </TouchableOpacity>
            );
          })}
        </View>

        <TouchableOpacity activeOpacity={0.9} style={styles.doneBtn} onPress={handleDone}>
          <Text style={styles.doneText}>XONG</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: '#fff',
    paddingBottom: 24,
  },
  headerCard: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  thumb: {
    width: 60,
    height: 90,
    resizeMode: 'contain',
    marginRight: 10,
  },
  name: {
    fontSize: 14,
    fontWeight: '700',
    color: '#111',
  },
  meta: {
    marginTop: 2,
    fontSize: 12,
    color: '#333',
  },
  price: {
    marginTop: 6,
    fontSize: 18,
    fontWeight: '800',
    color: '#111',
  },
  grayArea: {
    backgroundColor: '#cfcfcf',
    paddingHorizontal: 12,
    paddingTop: 8,
    paddingBottom: 16,
    minHeight: 420,
  },
  chooseLabel: {
    fontSize: 13,
    color: '#222',
    marginBottom: 8,
  },

  colorsColumn: {
    alignItems: 'center',
    marginTop: 6,
  },
  swatchWrap: {
    width: 72,
    height: 72,
    padding: 4,
    backgroundColor: '#cfcfcf',
    marginVertical: 8,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  swatchActiveWrap: {
    borderColor: '#F3C10D',
  },
  swatch: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 2,
  },

  doneBtn: {
    marginTop: 16,
    backgroundColor: '#7E37FF',
    height: 40,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  doneText: {
    color: '#fff',
    fontWeight: '800',
    letterSpacing: 0.5,
  },
});
