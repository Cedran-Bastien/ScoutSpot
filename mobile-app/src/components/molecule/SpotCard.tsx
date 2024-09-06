import { Card } from "react-native-paper";
import { Text, Image, Dimensions } from "react-native";
import { SpotData } from "@scoutspot/shared-types";
import Carousel from "react-native-reanimated-carousel";

const SpotCard = ({ spotData }: { spotData: SpotData }) => {
  return (
    <Card>
      <Carousel
        loop
        height={Dimensions.get("window").height / 3}
        width={Dimensions.get("window").width}
        data={spotData.pictureKeys.map((key) =>
          `${process.env.EXPO_PUBLIC_BASE_URL_AWS_S3}${key}`.replace(" ", "+"),
        )}
        renderItem={({ item }) => (
          <Image
            style={{
              flex: 1,
            }}
            source={{ uri: item }}
          />
        )}
      />
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
