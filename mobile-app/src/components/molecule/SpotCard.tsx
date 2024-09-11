import { Card, Text } from "react-native-paper";
import { SpotData } from "@scoutspot/shared-types";
import PaginatedCarousel from "@/components/molecule/PaginatedCarousel";

const SpotCard = ({ spotData }: { spotData: SpotData }) => {
  return (
    <Card
      mode={"elevated"}
      elevation={5}
      style={{ display: "flex", gap: 50, borderRadius: 16, margin: 10 }}
    >
      <Card.Title
        title={
          <Text
            variant={"titleLarge"}
            children={
              spotData.name.charAt(0).toUpperCase() + spotData.name.slice(1)
            }
          />
        }
      />
      <PaginatedCarousel data={spotData.pictureKeys} />
      <Card.Content style={{ padding: 0 }}>
        <Text>Addresse : {spotData.address}</Text>
        <Text>Ville : {spotData.town}</Text>
        <Text>Mail: {spotData.mail}</Text>
        <Text>Tel : {spotData.phoneNumber}</Text>
      </Card.Content>
    </Card>
  );
};

export default SpotCard;
