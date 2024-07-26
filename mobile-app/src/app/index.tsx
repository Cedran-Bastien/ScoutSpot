import { FlatList, View } from "react-native";
import { Appbar } from "react-native-paper";
import SpotCard from "@/src/components/molecule/SpotCard";
import getSpot from "@/src/hooks/getSpot";
import { useState } from "react";

const Index = () => {
  const [spots, setSpots] = useState<SpotData[]>(getSpot());

  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Spots" />
      </Appbar.Header>
      <FlatList
        data={spots}
        renderItem={({ item }) => <SpotCard placeData={item} />}
      />
    </>
  );
};

export default Index;
