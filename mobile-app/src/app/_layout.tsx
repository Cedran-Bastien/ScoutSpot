import { ApiProvider } from "@/provider";
import { Stack, Slot } from "expo-router";

const Layout = () => {
  return (
    <ApiProvider>
      {/*<Stack>*/}
      <Slot />
      {/*<Stack.Screen*/}
      {/*  name="(home)"*/}
      {/*  options={{*/}
      {/*    headerShown: false,*/}
      {/*  }}*/}
      {/*/>*/}
      {/*</Stack>*/}
    </ApiProvider>
  );
};

export default Layout;
