import { JSX } from "react";
import { UpdTaskById, TaskType, ActionWithMainTaskInfo } from "./Todo";

type PropsType = {
  task: TaskType;
  onDoneTask: UpdTaskById;
  onClickUpdating: ActionWithMainTaskInfo;
  onClickDelete: UpdTaskById;
};

export const UsualTask = ({
  task,
  onDoneTask,
  onClickUpdating,
  onClickDelete,
}: PropsType): JSX.Element => (
  <>
    <span
      onClick={() => onDoneTask(task.id)}
      className={task.isDone ? "taskSpan done" : "taskSpan"}
    >
      {task.value}
    </span>
    <img
      className="icon"
      src="update.png"
      onClick={() => onClickUpdating(task)}
    ></img>
    <img
      className="icon"
      src="basket.png"
      onClick={() => onClickDelete(task.id)}
    ></img>
  </>
);
