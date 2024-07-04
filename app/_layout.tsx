import { Slot } from "expo-router";
import { Platform, SafeAreaView, StatusBar } from "react-native";

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
