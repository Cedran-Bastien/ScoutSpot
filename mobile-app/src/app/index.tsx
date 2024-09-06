import { FlatList, ScrollView, Text } from "react-native";
import { Appbar } from "react-native-paper";
import SpotCard from "@/components/molecule/SpotCard";
import { useApiClient } from "@/hooks/useApiClient";

const Index = () => {
  const { spots } = useApiClient();

  const { data, error } = spots.getSpots.useQuery();

  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Spots" />
      </Appbar.Header>
      {!error && data && (
        <FlatList
          style={{ display: "flex", gap: 5 }}
          data={data}
          renderItem={({ item }) => <SpotCard spotData={item} />}
        />
      )}
      {error && <Text>{error.message}</Text>}
    </>
  );
};

export default Index;
