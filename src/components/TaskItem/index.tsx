import { View, Text } from "react-native";
import { styles } from "./styles";
import { Checkbox } from "../Checkbox";
import { useState } from "react";
import { DeleteButton } from "../DeleteButton";
import { Task } from "../../screens/ToDoScreen";

type TaskItemProps = {
  task: Task;
  removeTask: (id: string) => void;
  onToggleIsTaskDone: (id: string) => void;
};

export const TaskItem = ({
  task,
  removeTask,
  onToggleIsTaskDone,
}: TaskItemProps) => {
  const [isTaskDone, setIsTaskDone] = useState(task.done);

  const toggleIsTaskDone = () => {
    onToggleIsTaskDone(task.id);
    setIsTaskDone(task.done);
  };

  return (
    <View
      style={[
        styles.container,
        isTaskDone ? styles.doneContainer : styles.toDoContainer,
      ]}
    >
      <Checkbox isChecked={isTaskDone} onCheckboxPress={toggleIsTaskDone} />
      <Text
        style={[styles.text, isTaskDone ? styles.doneText : styles.toDoText]}
      >
        {task.title}
      </Text>
      <DeleteButton onPress={() => removeTask(task.id)} />
    </View>
  );
};
