import { JSX } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { MainRoutes } from './helpers/Routes'
import { LoginPage } from './components/LoginPage'
import { RegisterPage } from './components/RegisterPage'
import { PrivateRoute } from './components/PrivateRoute'
import { Layout } from './components/Layout'
import { Todo } from './components/Todo'

import './App.css'

export function App(): JSX.Element {
  return (
    <div>
      <Routes>
        <Route path={MainRoutes.root} element={<Layout />}>
          <Route index element={<Navigate to={MainRoutes.login} replace />} />
          <Route path={MainRoutes.register} element={<RegisterPage />} />
          <Route path={MainRoutes.login} element={<LoginPage />} />
          <Route element={<PrivateRoute />}>
            <Route path={MainRoutes.todos} element={<Todo />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}
