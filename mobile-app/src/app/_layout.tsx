import { ApiProvider } from "@/provider";
import { Slot } from "expo-router";
import { Platform, SafeAreaView, StatusBar } from "react-native";

const Layout = () => {
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
        flex: 1,
      }}
    >
      <ApiProvider>
        <Slot />
      </ApiProvider>
    </SafeAreaView>
  );
};

export default Layout;
