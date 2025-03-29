import { AxiosResponse } from 'axios'
import { instance } from '../api/instance'
import { MainRoutes } from '../helpers/Routes'
import { TaskType } from '../types/TaskType'

export type TodoType = {
    isCompleted: boolean
    id: number
    title: string
    user_id: number
}

export const todosApi = {
    getTodos() {
        return instance.get<TodoType[]>(MainRoutes.todos);
    },
    postTodos(title: string) {
        return instance.post<TodoType, AxiosResponse<TodoType>, { title: string }>(MainRoutes.todos, { title });
    },
    patchTodos(task: Omit<TaskType, 'isUpdating' | 'isCompleted'>) {
        return instance.patch<TodoType, AxiosResponse<TodoType>, { title: string }>(`${MainRoutes.todos}/${task.id}`, { title: task.title });
    },
    patchCompletedTodos(id: number) {
        return instance.patch<TodoType[]>(`${MainRoutes.todos}/${id}/isCompleted`)
    },
    deleteTodos(id: number) {
        return instance.delete<TodoType>(`${MainRoutes.todos}/${id}`)
    }
}