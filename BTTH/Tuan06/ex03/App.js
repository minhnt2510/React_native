import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import {
  View,
  Text,
  FlatList,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

const Tab = createBottomTabNavigator();
const PRODUCTS = [
  { id: '1', name: 'iPhone 15' },
  { id: '2', name: 'Galaxy S24' },
  { id: '3', name: 'Xiaomi 14' },
  { id: '4', name: 'Pixel 8' },
  { id: '5', name: 'Vsmart Joy 3' },
];

function HomeScreen() {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <Text style={styles.itemText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.screen}>
      <Text style={styles.heading}>Danh sách sản phẩm</Text>
      <FlatList
        data={PRODUCTS}
        keyExtractor={(it) => it.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}
function SearchScreen() {
  const [q, setQ] = React.useState('');
  const filtered = React.useMemo(() => {
    const kw = q.trim().toLowerCase();
    return kw
      ? PRODUCTS.filter((p) => p.name.toLowerCase().includes(kw))
      : PRODUCTS;
  }, [q]);

  return (
    <View style={styles.screen}>
      <Text style={styles.heading}>Tìm kiếm</Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập từ khóa..."
        value={q}
        onChangeText={setQ}
        autoCapitalize="none"
        clearButtonMode="while-editing"
      />
      <FlatList
        data={filtered}
        keyExtractor={(it) => it.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.name}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={{ textAlign: 'center', color: '#888', marginTop: 16 }}>
            Không có kết quả
          </Text>
        }
      />
    </View>
  );
}
function ProfileScreen() {
  return (
    <View style={[styles.screen, { alignItems: 'center' }]}>
      <Image
        source={{ uri: 'https://cdn11.dienmaycholon.vn/filewebdmclnew/public/userupload/files/Image%20FP_2024/meme-meo-4.jpg' }}
        style={styles.avatar}
      />
      <Text style={[styles.heading, { marginTop: 12 }]}>Nguyen Tan Minh</Text>
    </View>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerTitleAlign: 'center',
          tabBarIcon: ({ focused, color, size }) => {
            let icon = 'ellipse';
            if (route.name === 'Home') icon = focused ? 'home' : 'home-outline';
            if (route.name === 'Search') icon = focused ? 'search' : 'search-outline';
            if (route.name === 'Profile') icon = focused ? 'person' : 'person-outline';
            return <Ionicons name={icon} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#0a7',
          tabBarInactiveTintColor: '#777',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Tab.Screen name="Search" component={SearchScreen} options={{ title: 'Search' }} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  screen: { flex: 1, padding: 16, backgroundColor: '#fff' },
  heading: { fontSize: 18, fontWeight: '700', color: '#111', marginBottom: 12 },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
  },
  item: {
    padding: 14,
    borderRadius: 8,
    backgroundColor: '#f8f8f8',
  },
  itemText: { fontSize: 16, color: '#222' },
  separator: { height: 8 },
  avatar: { width: 120, height: 120, borderRadius: 60, backgroundColor: '#eee' },
});
