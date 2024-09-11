import { Redirect } from "expo-router";
import { router } from "expo-router";

const Root = () => {
  // router.push("/home/spots");
  return <Redirect href="/home/spots" />;
};

export default Root;
