import { View, Text } from "react-native";
import { styles } from "./styles";
import { Chip } from "../Chip";

type ListHeaderProps = {
  created: number;
  done: number;
};

export const ListHeader = ({ created, done }: ListHeaderProps) => {
  return (
    <>
      {created > 0 && (
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={[styles.text, styles.createdText]}>Criadas</Text>
            <Chip value={created} />
          </View>

          <View style={styles.textContainer}>
            <Text style={[styles.text, styles.doneText]}>Concluídas</Text>
            <Chip value={done} />
          </View>
        </View>
      )}
    </>
  );
};
