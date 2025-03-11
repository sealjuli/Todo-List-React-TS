import { JSX } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { RoutesClass } from '../helpers/Routes'

export const PrivateRoute = (): JSX.Element => {
  const isAuth = localStorage.getItem('token')
  return isAuth ? <Outlet /> : <Navigate to={RoutesClass.login} replace />
}
