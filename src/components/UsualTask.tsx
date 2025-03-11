import { JSX } from 'react';
import { useAppDispatch } from '../hooks/hooks';
import {
  deleteTask,
  doneTask,
  updatingTask,
} from '../redux/actions/taskActions';
import { updateValue } from '../redux/actions/updatingValueActions';
import { TaskType } from '../types/TaskType';

type PropsType = {
  task: TaskType;
};

export const UsualTask = ({ task }: PropsType): JSX.Element => {
  const dispatch = useAppDispatch();

  const onClickUpdate = (task: TaskType) => {
    dispatch(updatingTask(task.id));
    dispatch(updateValue(task.value));
  };

  return (
    <>
      <span
        onClick={() => dispatch(doneTask(task.id))}
        className={task.isDone ? 'taskSpan done' : 'taskSpan'}
      >
        {task.value}
      </span>
      <img
        className="icon"
        src="/Todo-List-React-TS/update.png"
        onClick={() => onClickUpdate(task)}
      ></img>
      <img
        className="icon"
        src="/Todo-List-React-TS/basket.png"
        onClick={() => dispatch(deleteTask(task.id))}
      ></img>
    </>
  );
};
