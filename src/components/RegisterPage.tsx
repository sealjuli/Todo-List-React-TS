import { JSX } from 'react'
import { useNavigate } from 'react-router'
import { useForm, SubmitHandler } from 'react-hook-form'
import { ModalWindow } from './ModalWindow'
import { RoutesClass } from '../helpers/Routes'
import { fetchPostUser } from '../redux/slices/usersSlice'
import { useAppDispatch } from '../hooks/hooks'

export function RegisterPage(): JSX.Element {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  type FormData = {
    username: string
    email: string
    password: string
    gender: string
    age: number
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = (data) => {
    dispatch(fetchPostUser(data))
  }

  const navigateToLogin = () => {
    navigate(`${RoutesClass.root}${RoutesClass.login}`)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label className="label_register">username</label>
          <input
            placeholder="Dino_saur_cream"
            {...register('username', {
              required: 'username required',
            })}
          />
        </div>
        <div className="form-group">
          <label className="label_register">email</label>
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
        <div className="form-group">
          <label className="label_register">password</label>
          <input
            type="password"
            placeholder="secret_Info123"
            {...register('password', {
              required: 'password required',
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
                message:
                  'Password must be at least 8 characters long and include at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.',
              },
            })}
          />
        </div>
        <div className="form-group">
          <label className="gender">gender</label>
          <span>Male</span>
          <input
            className="gender_input"
            type="radio"
            {...register('gender', { required: 'Choose your gender' })}
            value="male"
          />
          <span>Female</span>
          <input
            className="gender_input"
            type="radio"
            {...register('gender', { required: 'Choose your gender' })}
            value="female"
          />
        </div>
        <div className="form-group">
          <label className="label_register">age</label>
          <input
            placeholder="48"
            {...register('age', {
              required: 'age required',
            })}
          />
        </div>
        <p style={{ color: 'red' }}>
          {errors.username?.message ||
            errors.email?.message ||
            errors.password?.message ||
            errors.gender?.message ||
            errors.age?.message}
        </p>
        <button type="submit">Sign Up</button>
      </form>

      <ModalWindow />

      <p className="logout" onClick={navigateToLogin}>
        Already have an account? Log in
      </p>
    </div>
  )
}
