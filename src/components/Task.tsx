import React, { JSX } from 'react'
import { useAppSelector } from '../hooks/hooks'
import { selectTaskById } from '../redux/slices/todosSlice'
import { UsualTask } from './UsualTask'
import { UpdatingTask } from './UpdatingTask'

type PropsType = {
  taskId: number
}

export const Task = React.memo(({ taskId }: PropsType): JSX.Element => {
  const task = useAppSelector((state) => selectTaskById(state, taskId))

  if (!task) {
    return <div>Задача не найдена</div>
  }

  return (
    <div key={task.id} className={task.isUpdating ? 'task isUpdating' : 'task'}>
      {task.isUpdating ? (
        <UpdatingTask taskId={task.id} />
      ) : (
        <UsualTask taskId={task.id} />
      )}
    </div>
  )
})
