import { JSX } from "react";
import { Task } from "./Task";
import { TaskType, UpdTaskById, ActionWithMainTaskInfo } from "./Todo";

type PropsType = {
  tasks: TaskType[];
  deleteTask: UpdTaskById;
  updatingTask: UpdTaskById;
  updateTask: ActionWithMainTaskInfo;
  doneTask: UpdTaskById;
};

export const Tasks = ({
  tasks,
  deleteTask,
  updatingTask,
  updateTask,
  doneTask,
}: PropsType): JSX.Element => {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          updatingTask={updatingTask}
          updateTask={updateTask}
          doneTask={doneTask}
        />
      ))}
    </div>
  );
};
