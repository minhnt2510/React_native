import * as React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const PRODUCTS = [
  { id: 1, name: 'Product 1' },
  { id: 2, name: 'Product 2' },
  { id: 3, name: 'Product 3' },
];
function Products({ navigation }) {
  return (
    <View style={{ flex: 1, padding: 15 }}>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>Danh sách sản phẩm trang product</Text>
      <FlatList
        data={PRODUCTS}
        keyExtractor={(i) => String(i.id)}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ProductDetails', { id: item.id, name: item.name })}
            style={{ padding: 12, borderWidth: 1, borderColor: '#ddd', marginBottom: 8 }}
          >
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

function Favorites() {
  const saved = [PRODUCTS[0]];
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>Danh sách sản phẩm trang Favorites</Text>
      <FlatList
        data={saved}
        keyExtractor={(i) => String(i.id)}
        renderItem={({ item }) => (
          <View style={{ padding: 12, borderWidth: 1, borderColor: '#ddd', marginBottom: 8 }}>
            <Text>{item.name}</Text>
          </View>
        )}
        ListEmptyComponent={<Text>Empty</Text>}
      />
    </View>
  );
}
function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <Tab.Screen name="Products" component={Products} />
      <Tab.Screen name="Favorites" component={Favorites} />
    </Tab.Navigator>
  );
}
function ProductDetails({ route }) {
  const { id, name } = route.params || {};
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>ID: {id}</Text>
      <Text>Name: {name}</Text>
    </View>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeTabs} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
