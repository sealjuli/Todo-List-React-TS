import { AxiosResponse } from 'axios'
import { instance } from '../api/instance'
import { RoutesClass } from '../helpers/Routes'
import { TaskType } from '../types/TaskType'

export type TodoType = {
    isCompleted: boolean
    id: number
    title: string
    user_id: number
}

export const todosApi = {
    getTodos() {
        return instance.get<TodoType[]>(RoutesClass.todos);
    },
    postTodos(title: string) {
        return instance.post<TodoType, AxiosResponse<TodoType>, { title: string }>(RoutesClass.todos, { title });
    },
    patchTodos(task: Omit<TaskType, 'isUpdating' | 'isCompleted'>) {
        return instance.patch<TodoType, AxiosResponse<TodoType>, { title: string }>(`${RoutesClass.todos}/${task.id}`, { title: task.title });
    },
    patchCompletedTodos(id: number) {
        return instance.patch<TodoType[]>(`${RoutesClass.todos}/${id}/isCompleted`)
    },
    deleteTodos(id: number) {
        return instance.delete<TodoType>(`${RoutesClass.todos}/${id}`)
    }
}