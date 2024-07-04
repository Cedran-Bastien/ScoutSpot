import { Card } from "react-native-paper";
import { Text } from "react-native";
import { Space_Separator } from "json5/lib/unicode";

const PlaceCard = ({ placeData }: { placeData: PlaceData }) => {
  return (
    <Card>
      <Card.Cover
        source={{
          uri: "https://www.google.com/search?q=campagne&client=ubuntu-sn&sca_esv=4bb6b1564136f20c&channel=fs&tbm=isch&source=iu&ictx=1&vet=1&fir=cT0hMiu2lQvvsM%252CW9UGOabYshRIIM%252C%252Fm%252F01f4td%253B14sa7fmse9hOEM%252CmjDAuoQ5tcNqcM%252C_%253BLEFvlFVvIVc27M%252CtcDdN7NtFrTMLM%252C_%253BomNZs_ubynjLMM%252Ch44HZ2RidXKQ-M%252C_&usg=AI4_-kSF7BNkfbnoSeqHs3txSmCP0KrjHQ&sa=X&ved=2ahUKEwjJ853QoomHAxWncaQEHdeaBBoQ_B16BAgwEAE#imgrc=cT0hMiu2lQvvsM",
        }}
      ></Card.Cover>
      <Card.Content style={{ padding: 10 }}>
        <Text>Addresse : {placeData.address}</Text>
        <Text>Ville : {placeData.town}</Text>
        <Text>Mail: {placeData.mail}</Text>
        <Text>Tel : {placeData.phoneNumber}</Text>
      </Card.Content>
    </Card>
  );
};

export default PlaceCard;
