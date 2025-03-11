export const ADD_TASK = "ADD_TASK";
export const UPDATING_TASK = "UPDATING_TASK";
export const UPDATE_TASK = "UPDATE_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const DONE_TASK = "DONE_TASK";

import { TaskType } from '../../types/TaskType';

export const addTask = (task: TaskType) => {
  return {
    type: ADD_TASK,
    payload: task,
  } as const;
};

export const updatingTask = (id: string) => {
  return {
    type: UPDATING_TASK,
    payload: id,
  } as const;
};

export const updateTask = (task: Omit<TaskType, 'isUpdating' | 'isDone'>) => {
  return {
    type: UPDATE_TASK,
    payload: task,
  } as const;
};

export const deleteTask = (id: string) => {
  return {
    type: DELETE_TASK,
    payload: id,
  } as const;
};

export const doneTask = (id: string) => {
  return {
    type: DONE_TASK,
    payload: id,
  } as const;
};

export type TaskActionsType = ReturnType<typeof addTask> |
  ReturnType<typeof updatingTask> |
  ReturnType<typeof updateTask> |
  ReturnType<typeof deleteTask> |
  ReturnType<typeof doneTask>