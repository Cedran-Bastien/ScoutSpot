import { Platform, SafeAreaView, StatusBar } from "react-native";
import { Slot } from "expo-router";
import { ApiProvider } from "@/provider/ApiProvider";
import { CloudStorageProvider } from "@/provider/CloudStorageProvider";
import { awsClient } from "@/provider/aws";

const RootLayout = () => {
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
        flex: 1,
      }}
    >
      <ApiProvider>
        <CloudStorageProvider cloudStorageClient={new awsClient()}>
          <Slot />
        </CloudStorageProvider>
      </ApiProvider>
    </SafeAreaView>
  );
};

export default RootLayout;
