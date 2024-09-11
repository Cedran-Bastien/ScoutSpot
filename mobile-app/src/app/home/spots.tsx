import { useApiClient } from "@/hooks/useApiClient";
import { FlatList, Text, View } from "react-native";
import SpotCard from "@/components/molecule/SpotCard";

const SpotsPage = () => {
  const { spots } = useApiClient();

  const { data, error } = spots.getSpots.useQuery();

  return (
    <View>
      {!error && data && (
        <FlatList
          style={{ display: "flex", gap: 5 }}
          data={data}
          renderItem={({ item }) => <SpotCard spotData={item} />}
        />
      )}
      {error && <Text>{error.message}</Text>}
    </View>
  );
};

export default SpotsPage;
