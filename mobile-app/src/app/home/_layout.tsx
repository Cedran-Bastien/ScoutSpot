import { Tabs } from "expo-router";
import Icon from "react-native-vector-icons/MaterialIcons";
import { BottomNavigation } from "react-native-paper";
import { CommonActions } from "@react-navigation/native";

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: "spots",
};

const HomeLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
      tabBar={({ navigation, state, descriptors, insets }) => (
        <BottomNavigation.Bar
          navigationState={state}
          safeAreaInsets={insets}
          onTabPress={({ route, preventDefault }) => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (event.defaultPrevented) {
              preventDefault();
            } else {
              navigation.dispatch({
                ...CommonActions.navigate(route.name, route.params),
                target: state.key,
              });
            }
          }}
          renderIcon={({ route, focused, color }) => {
            const { options } = descriptors[route.key];
            if (options.tabBarIcon) {
              return options.tabBarIcon({ focused, color, size: 24 });
            }

            return null;
          }}
          getLabelText={({ route }) => {
            const { options } = descriptors[route.key];

            return options.title;
          }}
        />
      )}
    >
      <Tabs.Screen
        name="spots"
        options={{
          title: "Spots",
          tabBarIcon: ({ color, size }) => {
            return <Icon name="location-pin" size={size} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="support"
        options={{
          title: "Support",
          tabBarIcon: ({ color, size }) => {
            return <Icon name="phone" size={size} color={color} />;
          },
        }}
      />
    </Tabs>
  );
};

export default HomeLayout;
