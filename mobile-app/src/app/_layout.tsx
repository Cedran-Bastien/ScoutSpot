import { Platform, SafeAreaView, StatusBar } from "react-native";
import { Slot } from "expo-router";

const RootLayout = () => {
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <Slot />
    </SafeAreaView>
  );
};

export default RootLayout;
