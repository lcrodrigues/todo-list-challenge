import { View } from "react-native";
import { AppLogo } from "../../../assets/icons";
import { styles } from "./styles";

export const Header = () => {
  return (
    <View style={styles.container}>
      <AppLogo style={styles.logo} />
    </View>
  );
};
