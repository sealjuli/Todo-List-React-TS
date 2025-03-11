import React, { JSX } from 'react';
import { UpdatingTask } from './UpdatingTask';
import { UsualTask } from './UsualTask';
import { TaskType } from '../types/TaskType';

type PropsType = {
  task: TaskType;
};

export const Task = React.memo(({ task }: PropsType): JSX.Element => {
  return (
    <div key={task.id} className={task.isUpdating ? 'task isUpdating' : 'task'}>
      {task.isUpdating ? (
        <UpdatingTask id={task.id} />
      ) : (
        <UsualTask task={task} />
      )}
    </div>
  );
});
