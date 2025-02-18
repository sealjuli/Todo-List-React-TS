import { JSX, ChangeEvent, KeyboardEvent } from "react";
import { useState } from "react";
import { addTask } from "./Todo";

type PropsType = {
  addTask: addTask;
};

export const TaskInput = ({ addTask }: PropsType): JSX.Element => {
  const [value, setValue] = useState("");

  const onAddTask = () => {
    if (!value) return;

    const uuid = crypto.randomUUID();
    addTask({ value, id: uuid, isUpdating: false, isDone: false });
    setValue("");
  };

  const onAddTaskHandle = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onEnterAddTask = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") return onAddTask();
  };

  return (
    <div>
      <h2>{"Get things done!"}</h2>
      <input
        placeholder="What is the task today?"
        onChange={onAddTaskHandle}
        value={value}
        onKeyDown={(e) => onEnterAddTask(e)}
      />
      <button onClick={onAddTask}>{"Add task"}</button>
    </div>
  );
};
