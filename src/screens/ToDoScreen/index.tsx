import { AddTaskInput } from "../../components/AddTaskInput";
import { Header } from "../../components/Header";
import { ToDoList } from "../../components/ToDoList";
import { useState } from "react";
import { styles } from "./styles";

export type Task = {
  id: string;
  title: string;
  done: boolean;
};

export const TodoScreen = () => {
  const [list, setList] = useState<Task[]>([]);
  const [newTaskInput, setNewTaskInput] = useState("");

  const addTask = (task: Task) => {
    setList((currentList) => [...currentList, task]);
    setNewTaskInput("");
  };

  const removeTask = (id: string) => {
    setList((currentList) => currentList.filter((task) => task.id !== id));
  };

  return (
    <>
      <Header />
      <AddTaskInput
        style={styles.input}
        taskInput={newTaskInput}
        setTaskInput={setNewTaskInput}
        onAddNewTask={addTask}
      />
      <ToDoList list={list} removeTask={removeTask} />
    </>
  );
};
