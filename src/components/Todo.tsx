import { JSX, useState } from "react";
import { TaskInput } from "./TaskInput";
import { Tasks } from "./Tasks";
import "../App.css";

export type TaskType = {
  id: string;
  value: string;
  isUpdating: boolean;
  isDone: boolean;
};

export type addTask = (task: TaskType) => void;

export type UpdTaskById = (id: string) => void;

export type ActionWithMainTaskInfo = (obj: {
    id: string;
  value: string;
}) => void;

export const Todo = (): JSX.Element => {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const addTask: addTask = (newTask) => {
    setTasks((tasks) => [...tasks, newTask]);
  };

  const deleteTask: UpdTaskById = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id != id));
  };

  const updatingTask: UpdTaskById = (id) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.isUpdating) {
          return { ...task, isUpdating: false };
        } else if (task.id === id) {
          return { ...task, isUpdating: true };
        } else {
          return task;
        }
      })
    );
  };

  const updateTask: ActionWithMainTaskInfo = ({ id, value }) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, value, isUpdating: false } : task
      )
    );
  };

  const doneTask: UpdTaskById = (id) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  return (
    <div>
      <TaskInput addTask={addTask}></TaskInput>
      <Tasks
        tasks={tasks}
        deleteTask={deleteTask}
        updatingTask={updatingTask}
        updateTask={updateTask}
        doneTask={doneTask}
      ></Tasks>
      <p className="logout">"Log out"</p>
    </div>
  );
};
