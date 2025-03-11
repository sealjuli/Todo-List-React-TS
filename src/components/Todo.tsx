import { JSX } from 'react';
import { TaskInput } from './TaskInput';
import { Tasks } from './Tasks';

export const Todo = (): JSX.Element => {
  return (
    <div>
      <TaskInput />
      <Tasks />
      <p className="logout">"Log out"</p>
    </div>
  );
};
