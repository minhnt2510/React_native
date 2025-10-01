import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const DATA = [
  { id: "1", name: "Pinarello", price: 1800, image: require("../assets/blue.png") },
  { id: "2", name: "Pina Mountai", price: 1700, image: require("../assets/red.png") },
  { id: "3", name: "Pina Bike", price: 1500, image: require("../assets/pink.png") },
  { id: "4", name: "Pinarello", price: 1900, image: require("../assets/red2.png") },
  { id: "5", name: "Pinarello", price: 2700, image: require("../assets/blue.png") },
  { id: "6", name: "Pinarello", price: 1350, image: require("../assets/red.png") },
];

export default function ProductList({ navigation }) {
const [filter, setFilter] = useState("All");

const TABS = ["All", "Roadbike", "Mountain"];

const renderItem = ({ item }) => (
  <TouchableOpacity
 style={styles.card}
 onPress={() => navigation.navigate("ProductDetail", { product: item })}>
 <Image source={item.image} style={styles.img} />
 <Text style={styles.name}>{item.name}</Text>
 <Text style={styles.price}>${item.price}</Text>
  </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
   <Text style={styles.title}>The world’s Best Bike</Text>
   <View style={styles.tabs}>
     {TABS.map((tab) => (
<TouchableOpacity
  key={tab}
  style={[
    styles.tab,
    filter === tab && { backgroundColor: "#fce4ec" },
  ]}
  onPress={() => setFilter(tab)}>
  <Text
    style={[
      styles.tabText,
      filter === tab && { color: "red", fontWeight: "bold" },
    ]}>
    {tab}
  </Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{ padding: 10 }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingTop: 40 },
  title: { fontSize: 18, textAlign: "center", marginBottom: 15, fontWeight: "bold", color: "red" },
  tabs: { flexDirection: "row", justifyContent: "center", marginBottom: 20 },
  tab: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    marginHorizontal: 5,
  },
  tabText: { color: "#444" },
  card: {
    backgroundColor: "#fff",
    alignItems: "center",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    flex: 1,
    marginHorizontal: 5,
    elevation: 2, 
    shadowColor: "#000",  
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  img: { width: 100, height: 100, resizeMode: "contain", marginBottom: 10 },
  name: { fontSize: 14, fontWeight: "500", marginBottom: 5 },
  price: { fontSize: 14, color: "orange" },
});
