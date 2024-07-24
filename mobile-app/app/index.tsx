import { FlatList, Text, View } from "react-native";
import { Appbar, Card, List } from "react-native-paper";
import SpotCard from "../components/molecule/SpotCard";
import placeCard from "../components/molecule/SpotCard";
import { AppbarHeader } from "react-native-paper/lib/typescript/components/Appbar/AppbarHeader";
import getSpot from "../hooks/getSpot";
import { useEffect, useState } from "react";

const Index = () => {
  const [spots, setSpots] = useState<SpotData[]>(getSpot());

  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Spots" />
      </Appbar.Header>
      <FlatList
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        data={spots}
        renderItem={({ item }) => <SpotCard placeData={item} />}
      />
    </>
  );
};

export default Index;
