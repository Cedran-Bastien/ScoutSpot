import { Platform, SafeAreaView, StatusBar } from "react-native";
import { Slot } from "expo-router";
import { ApiProvider } from "@/provider/ApiProvider";

const RootLayout = () => {
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <ApiProvider>
        <Slot />
      </ApiProvider>
    </SafeAreaView>
  );
};

export default RootLayout;
