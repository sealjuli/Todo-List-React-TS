import React, { JSX, useCallback, useState, ChangeEvent } from "react";
import { TaskType, UpdTaskById, ActionWithMainTaskInfo } from "./Todo";
import { UpdatingTask } from "./UpdatingTask";
import { UsualTask } from "./UsualTask";

type PropsType = {
  task: TaskType;
  deleteTask: UpdTaskById;
  updatingTask: UpdTaskById;
  updateTask: ActionWithMainTaskInfo;
  doneTask: UpdTaskById;
};

export type OnChangeInput = (event: ChangeEvent<HTMLInputElement>) => void;

export const Task = React.memo(
  ({
    task,
    deleteTask,
    updatingTask,
    updateTask,
    doneTask,
  }: PropsType): JSX.Element => {
    const [inputValue, setInputValue] = useState("");

    const onChangeInput: OnChangeInput = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
      },
      []
    );

    const onClickDelete: UpdTaskById = useCallback((id) => {
      deleteTask(id);
    }, []);

    const onClickUpdating: ActionWithMainTaskInfo = useCallback(
      ({ id, value }) => {
        updatingTask(id);
        setInputValue(value);
      },
      []
    );

    const onUpdateTask: UpdTaskById = useCallback(
      (id) => {
        updateTask({ id, value: inputValue });
      },
      [inputValue]
    );

    const onDoneTask: UpdTaskById = useCallback((id) => {
      doneTask(id);
    }, []);

    return (
      <div
        key={task.id}
        className={task.isUpdating ? "task isUpdating" : "task"}
      >
        {task.isUpdating ? (
          <UpdatingTask
            id={task.id}
            onChangeInput={onChangeInput}
            onUpdateTask={onUpdateTask}
            inputValue={inputValue}
          />
        ) : (
          <UsualTask
            task={task}
            onDoneTask={onDoneTask}
            onClickUpdating={onClickUpdating}
            onClickDelete={onClickDelete}
          />
        )}
      </div>
    );
  }
);
