import { JSX, ChangeEvent, KeyboardEvent } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import {
  selectEnterValue,
  updateEnterValue,
} from '../redux/slices/enterValueSlice'
import { fetchPostTodos } from '../redux/slices/todosSlice'

export const TaskInput = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const value = useAppSelector(selectEnterValue)

  const onAddTask = () => {
    dispatch(fetchPostTodos(value))
    dispatch(updateEnterValue(''))
  }

  const onAddTaskHandle = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateEnterValue(event.target.value))
  }

  const onEnterAddTask = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') return onAddTask()
  }

  return (
    <div>
      <h2>Get things done!</h2>
      <input
        placeholder="What is the task today?"
        onChange={onAddTaskHandle}
        value={value}
        onKeyDown={(event) => onEnterAddTask(event)}
      />
      <button onClick={onAddTask}>Add task</button>
    </div>
  )
}
