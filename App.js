import { Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/Screens/Home";

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

function AddScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>AddScreen!</Text>
    </View>
  );
}

function SpecialScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>SpecialScreen!</Text>
    </View>
  );
}

function OrderScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>OrderScreen!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ tabBarIcon: makeIconRender("cog") }}
        />
        <Tab.Screen
          name="add"
          component={AddScreen}
          options={{ tabBarIcon: makeIconRender("plus") }}
        />
        <Tab.Screen
          name="special"
          component={SpecialScreen}
          options={{ tabBarIcon: makeIconRender("plus") }}
        />
        <Tab.Screen
          name="orders"
          component={OrderScreen}
          options={{ tabBarIcon: makeIconRender("offer") }}
        />
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: makeIconRender("home"),
            title: "الرئيسيه",
            headerTitle: "الرئيسيه",
            headerTitleAlign: "center",
            headerTintColor: "blue",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function makeIconRender(name) {
  return ({ color, size }) => (
    <MaterialCommunityIcons name={name} color={color} size={size} />
  );
}
