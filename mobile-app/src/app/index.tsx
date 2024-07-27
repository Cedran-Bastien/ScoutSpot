import { FlatList } from "react-native";
import { Appbar } from "react-native-paper";
import SpotCard from "@/components/molecule/SpotCard";
import { useApiClient } from "@/hooks/useApiClient";

const Index = () => {
  const { spots } = useApiClient();

  const { data } = spots.getSpots.useQuery();

  console.log(data);

  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Spots" />
      </Appbar.Header>
      <FlatList
        data={data}
        renderItem={({ item }) => <SpotCard placeData={item} />}
      />
    </>
  );
};

export default Index;
