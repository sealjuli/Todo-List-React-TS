import { JSX } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { MainRoutes } from '../helpers/Routes'

export const PrivateRoute = (): JSX.Element => {
  const isAuth = localStorage.getItem('token')
  return isAuth ? <Outlet /> : <Navigate to={MainRoutes.login} replace />
}
