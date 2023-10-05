import { View, Text } from "react-native";
import { ClipboardIcon } from "../../../assets/icons";
import { styles } from "./styles";

export const EmptyList = () => {
  return (
    <View style={styles.container}>
      <ClipboardIcon />

      <View>
        <Text style={[styles.text, styles.title]}>
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={[styles.text, styles.message]}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  );
};
