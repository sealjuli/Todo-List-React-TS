import {
  ADD_TASK,
  UPDATE_TASK,
  DELETE_TASK,
  DONE_TASK,
  UPDATING_TASK,
  TaskActionsType
} from "../actions/taskActions";

import { TaskType } from '../../types/TaskType';

const initialState = {
  tasks: [] as TaskType[],
};

type InitialStateType = typeof initialState

export const taskReducer = (state: InitialStateType = initialState, action: TaskActionsType): InitialStateType => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, { ...action.payload }],
      };
    case UPDATING_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.isUpdating) {
            return { ...task, isUpdating: false };
          } else if (task.id === action.payload) {
            return { ...task, isUpdating: true };
          } else {
            return task;
          }
        }),
      };
    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, value: action.payload.value, isUpdating: false }
            : task
        ),
      };
    case DONE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload ? { ...task, isDone: !task.isDone } : task
        ),
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id != action.payload),
      };
    default:
      return state;
  }
};
