import { JSX } from 'react'
import {
  clearUsersState,
  selectError,
  selectMessage,
} from '../redux/slices/usersSlice'
import { useNavigate } from 'react-router'
import { MainRoutes } from '../helpers/Routes'
import { useAppSelector, useAppDispatch } from '../hooks/hooks'

export const ModalWindow = (): JSX.Element => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const error = useAppSelector(selectError)
  const message = useAppSelector(selectMessage)

  return (
    <div
      className={error || message ? 'modal active' : 'modal'}
      onClick={() => {
        dispatch(clearUsersState())
        if (message) {
          navigate(`${MainRoutes.root}${MainRoutes.login}`)
          dispatch(clearUsersState())
        }
      }}
    >
      <div className="modal__context" onClick={(e) => e.stopPropagation()}>
        <b>{error || message}</b>
      </div>
    </div>
  )
}
