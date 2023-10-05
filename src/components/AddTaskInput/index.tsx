import { TextInput, View, ViewProps } from "react-native";
import { styles } from "./styles";
import { AddTaskButton } from "../AddTaskButton";
import { theme } from "../../contexts/ThemeContext";
import { Task } from "../../screens/ToDoScreen";

interface AddTaskInputProps extends ViewProps {
  taskInput: string;
  setTaskInput: (taskInput: string) => void;
  onAddNewTask: (task: Task) => void;
}

export const AddTaskInput = ({
  style,
  taskInput,
  setTaskInput,
  onAddNewTask,
}: AddTaskInputProps) => {
  const handleAddNewTask = () => {
    if (taskInput !== "") {
      const newTask = {
        done: false,
        id: Math.random().toString(),
        title: taskInput,
      };

      onAddNewTask(newTask);
    }
  };

  return (
    <View style={[style, styles.container]}>
      <TextInput
        value={taskInput}
        onChangeText={setTaskInput}
        style={styles.textInput}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={theme.colors.gray300}
      />
      <AddTaskButton onPress={handleAddNewTask} />
    </View>
  );
};
