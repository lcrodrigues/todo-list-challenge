import { Text, TextProps, View } from "react-native";
import { styles } from "./styles";

type ChipProps = {
  value: number;
};

export const Chip = ({ value }: ChipProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
};
