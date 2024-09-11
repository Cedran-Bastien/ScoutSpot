import { Card, Text } from "react-native-paper";
import { Platform, SafeAreaView, StatusBar } from "react-native";

const SupportPage = () => {
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
        flex: 1,
      }}
    >
      <Card style={{ margin: 10, height: "auto" }}>
        <Card.Title
          title={<Text variant="titleLarge">Ajout/Suppretion de Spots</Text>}
        />
        <Card.Content>
          <Text variant="bodyLarge">
            L’ajout ou la suppression se fait pour le moment par 2 moyen :{" "}
          </Text>
          <Text variant="bodyLarge"> - Mail: power.it@proton.me</Text>
          <Text variant="bodyLarge"> - Discord: Cèdran BASTIEN</Text>
          <Text variant="bodyLarge">
            Dans les deux cas, Voici les informations necessaire :
          </Text>
          <Text variant="bodyLarge"> - Addresse postal</Text>
          <Text variant="bodyLarge"> - Code postale</Text>
          <Text variant="bodyLarge"> - Ville</Text>
          <Text variant="bodyLarge"> - E-mail</Text>
          <Text variant="bodyLarge"> - Numero de téléphone</Text>
          <Text variant="bodyLarge"> - une ou des images du lieu</Text>
        </Card.Content>
      </Card>
    </SafeAreaView>
  );
};

export default SupportPage;
