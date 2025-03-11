import { Task } from './Task';
import { useAppSelector } from '../hooks/hooks';

export const Tasks = () => {
  const tasks = useAppSelector((state) => state.taskReducer.tasks);

  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};
