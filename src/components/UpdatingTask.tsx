import { JSX, KeyboardEvent } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { fetchPatchTodos } from '../redux/slices/todosSlice'
import {
  selectUpdatingValue,
  updateValue,
} from '../redux/slices/updatingValueSlice'

type PropsType = {
  taskId: number
}

export const UpdatingTask = ({ taskId }: PropsType): JSX.Element => {
  const dispatch = useAppDispatch()

  const updatingValue = useAppSelector(selectUpdatingValue)

  const onChangeTask = () => {
    dispatch(fetchPatchTodos({ id: taskId, title: updatingValue }))
  }

  const onKeyDownEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onChangeTask()
    }
  }

  return (
    <>
      <input
        autoFocus
        onChange={(event) => dispatch(updateValue(event.target.value))}
        onKeyDown={(e) => onKeyDownEnter(e)}
        value={updatingValue}
      />
      <button onClick={onChangeTask}>Update</button>
    </>
  )
}
