import { useApiClient } from "@/hooks/useApiClient";
import {
  FlatList,
  Platform,
  StatusBar,
  Text,
  SafeAreaView,
} from "react-native";
import SpotCard from "@/components/molecule/SpotCard";
import { Appbar } from "react-native-paper";

const SpotsPage = () => {
  const { spots } = useApiClient();

  const { data, error } = spots.getSpots.useQuery();

  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
        flex: 1,
      }}
    >
      {!error && data && (
        <FlatList
          style={{ display: "flex", gap: 5 }}
          data={data}
          renderItem={({ item }) => <SpotCard spotData={item} />}
        />
      )}
      {error && <Text>{error.message}</Text>}
    </SafeAreaView>
  );
};

export default SpotsPage;
