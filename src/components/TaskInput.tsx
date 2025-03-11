import { JSX, ChangeEvent, KeyboardEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { addTask } from '../redux/actions/taskActions';
import { updateValue } from '../redux/actions/inputValueActions';

export const TaskInput = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const value = useAppSelector((state) => state.inputValueReducer.value);

  const onAddTask = () => {
    if (!value) return;

    dispatch(
      addTask({
        value,
        id: crypto.randomUUID(),
        isUpdating: false,
        isDone: false,
      }),
    );
    dispatch(updateValue(''));
  };

  const onAddTaskHandle = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateValue(e.target.value));
  };

  const onEnterAddTask = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') return onAddTask();
  };

  return (
    <div>
      <h2>Get things done!</h2>
      <input
        placeholder="What is the task today?"
        onChange={onAddTaskHandle}
        value={value}
        onKeyDown={(e) => onEnterAddTask(e)}
      />
      <button onClick={onAddTask}>Add task</button>
    </div>
  );
};
