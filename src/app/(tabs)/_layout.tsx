import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerTintColor: "black", tabBarShowLabel: false }}>
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "For You",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={26} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="new"
        options={{
          headerTitle: "Create Post",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="plus-square-o" size={26} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerTitle: "Profile",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={26} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
