import { Pressable } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { CheckIcon } from "../../../assets/icons";

type CheckboxProps = {
  isChecked: boolean;
  onCheckboxPress: () => void;
};

export const Checkbox = ({ isChecked, onCheckboxPress }: CheckboxProps) => {
  const [isCheckedState, setIsCheckedState] = useState(isChecked);

  const toggleIsChecked = () => {
    setIsCheckedState((currentState) => !currentState);
    onCheckboxPress();
  };

  return (
    <>
      {isCheckedState ? (
        <Pressable
          style={({ pressed }) => [
            styles.box,
            pressed ? styles.checkedHoverBox : styles.checkedDefaultBox,
          ]}
          onPress={toggleIsChecked}
        >
          <CheckIcon />
        </Pressable>
      ) : (
        <Pressable
          style={({ pressed }) => [
            styles.box,
            pressed ? styles.uncheckedHoverBox : styles.uncheckedDefaultBox,
          ]}
          onPress={toggleIsChecked}
        />
      )}
    </>
  );
};
