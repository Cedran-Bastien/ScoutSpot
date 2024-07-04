import { Text } from "react-native";
import { Card } from "react-native-paper";
import PlaceCard from "@/components/molecule/PlaceCard";

const Index = () => {
  const cedranPlace: PlaceData = {
    address: "46 rue de laxou",
    postCode: 54000,
    town: "Nancy",
    mail: "cedran.bastien@orange.fr",
    phoneNumber: "0619446217",
  };

  return <PlaceCard placeData={cedranPlace} />;
};

export default Index;
