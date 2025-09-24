// App.js
import * as React from 'react';
import { View, Text, Switch } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function Home() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 6 }}>
      <Text style={{ fontWeight: '700' }}>Nguyen Tan Minh</Text>
    </View>
  );
}

function Settings() {
  const [opt1, setOpt1] = React.useState(false);
  const [opt2, setOpt2] = React.useState(true);

  return (
    <View style={{ flex: 1, padding: 16, gap: 16 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text>Thông báo</Text>
        <Switch value={opt1} onValueChange={setOpt1} />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text>Chế độ tối</Text>
        <Switch value={opt2} onValueChange={setOpt2} />
      </View>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Settings" component={Settings} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
