import { JSX } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { ModalWindow } from './ModalWindow'
import { RoutesClass } from '../helpers/Routes'
import {
  fetchPostLogin,
  selectStatus,
  clearUsersState,
} from '../redux/slices/usersSlice'
import { useAppSelector, useAppDispatch } from '../hooks/hooks'

export const LoginPage = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const status = useAppSelector(selectStatus)

  useEffect(() => {
    if (status === 'succeeded') {
      navigate(`${RoutesClass.root}${RoutesClass.todos}`)
      dispatch(clearUsersState())
    }
  }, [status, navigate])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  type FormData = {
    email: string
    password: string
  }

  const onSubmit: SubmitHandler<FormData> = (data) => {
    dispatch(fetchPostLogin(data))
  }

  const onClickLogout = () => {
    navigate(`${RoutesClass.root}${RoutesClass.register}`)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group login">
          <label>email</label>
          <input
            type="email"
            placeholder="dino_saur_cream@gmail.com"
            {...register('email', {
              required: 'email required',
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                message: 'Enter correct email',
              },
            })}
          />
        </div>
        <div className="form-group login">
          <label>password</label>
          <input
            type="password"
            placeholder="secret_Info123"
            {...register('password', {
              required: 'password required',
            })}
          />
        </div>
        <p style={{ color: 'red' }}>
          {errors.email?.message || errors.password?.message}
        </p>
        <button type="submit">Log In</button>
      </form>

      <ModalWindow />

      <p className="logout" onClick={onClickLogout}>
        Don't have an account? Sign Up
      </p>
    </div>
  )
}
