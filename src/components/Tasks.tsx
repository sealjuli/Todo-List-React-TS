import { JSX } from 'react'
import { useAppSelector } from '../hooks/hooks'
import { selectTodos } from '../redux/slices/todosSlice'
import { Task } from './Task'

export const Tasks = (): JSX.Element => {
  const tasks = useAppSelector(selectTodos)

  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} taskId={task.id} />
      ))}
    </div>
  )
}
