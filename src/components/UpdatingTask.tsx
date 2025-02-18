import { JSX, KeyboardEvent } from "react";
import { UpdTaskById } from "./Todo";
import { OnChangeInput } from "./Task";

type PropsType = {
  id: string;
  onChangeInput: OnChangeInput;
  onUpdateTask: UpdTaskById;
  inputValue: string;
};

export const UpdatingTask = ({
  id,
  onChangeInput,
  onUpdateTask,
  inputValue,
}: PropsType): JSX.Element => {
  const onKeyDownEnter = (e: KeyboardEvent<HTMLInputElement>, id: string) => {
    if (e.key === "Enter") return onUpdateTask(id);
  };

  return (
    <>
      <input
        autoFocus
        onChange={onChangeInput}
        onKeyDown={(e) => onKeyDownEnter(e, id)}
        value={inputValue}
      />
      <button onClick={() => onUpdateTask(id)}>{"Update"}</button>
    </>
  );
};
