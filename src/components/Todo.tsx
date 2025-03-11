import { useEffect, JSX } from 'react'
import { useAppDispatch } from '../hooks/hooks'
import { fetchGetTodos } from '../redux/slices/todosSlice'
import { useNavigate } from 'react-router'
import { TaskInput } from './TaskInput'
import { Tasks } from './Tasks'
import { RoutesClass } from '../helpers/Routes'

export function Todo(): JSX.Element {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchGetTodos())
  }, [dispatch])

  const onClickLogout = () => {
    localStorage.removeItem('token')
    navigate(`${RoutesClass.root}${RoutesClass.login}`)
  }

  return (
    <div>
      <TaskInput />
      <Tasks />
      <p className="logout" onClick={onClickLogout}>
        Log out
      </p>
    </div>
  )
}
