import { Pressable, PressableProps } from "react-native";
import { styles } from "./styles";
import { PlusIcon } from "../../../assets/icons";

export const AddTaskButton = ({ onPress }: PressableProps) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        pressed ? styles.hoverButton : styles.defaultButton,
      ]}
      onPress={onPress}
    >
      <PlusIcon />
    </Pressable>
  );
};
