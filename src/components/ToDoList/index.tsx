import { FlatList, View, Text } from "react-native";
import { styles } from "./styles";
import { TaskItem } from "../TaskItem";
import { Task } from "../../screens/ToDoScreen";
import { ListHeader } from "../ListHeader";
import { useState } from "react";
import { EmptyList } from "../EmptyList";

type ToDoListProps = {
  list: Task[];
  removeTask: (id: string) => void;
};

export const ToDoList = ({ list, removeTask }: ToDoListProps) => {
  const [doneTasks, setDoneTasks] = useState(
    list.filter((task) => task.done).length
  );

  const onToggleIsTaskDone = (id: string) => {
    const task = list.find((task) => task.id === id);
    if (!task) return;

    task.done = !task.done;
    if (task.done) {
      setDoneTasks(doneTasks + 1);
    } else {
      setDoneTasks(doneTasks - 1);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={() => (
          <ListHeader created={list.length} done={doneTasks} />
        )}
        ListEmptyComponent={() => <EmptyList />}
        style={styles.list}
        showsVerticalScrollIndicator={false}
        data={list}
        renderItem={({ item }) => (
          <TaskItem
            removeTask={removeTask}
            task={item}
            onToggleIsTaskDone={onToggleIsTaskDone}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
