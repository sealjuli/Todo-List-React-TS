import { JSX } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { updateValue } from '../redux/slices/updatingValueSlice'
import {
  selectTaskById,
  updatingTask,
  fetchDeleteTodos,
  fetchPatchCompletedTodos,
} from '../redux/slices/todosSlice'
import { TaskType } from '../types/TaskType'

type PropsType = {
  taskId: number
}

export const UsualTask = ({ taskId }: PropsType): JSX.Element => {
  const dispatch = useAppDispatch()
  const task = useAppSelector((state) => selectTaskById(state, taskId))

  if (!task) {
    return <div>Задача не найдена</div>
  }

  const onClickUpdate = (task: TaskType) => {
    dispatch(updatingTask(task.id))
    dispatch(updateValue(task.title))
  }

  return (
    <>
      <span
        onClick={() => dispatch(fetchPatchCompletedTodos(task.id))}
        className={task.isCompleted ? 'taskSpan done' : 'taskSpan'}
      >
        {task.title}
      </span>
      <img
        className="icon"
        src="update.png"
        onClick={() => onClickUpdate(task)}
      ></img>
      <img
        className="icon"
        src="basket.png"
        onClick={() => dispatch(fetchDeleteTodos(task.id))}
      ></img>
    </>
  )
}
