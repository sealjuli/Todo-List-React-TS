import { AxiosResponse } from 'axios'
import { instance } from '../api/instance'

export type LoginUserType = {
    email: string,
    password: string
}

export type LoginUserResponseType = {
    token: string
}

export type UserType = {
    username: string,
    email: string,
    password: string,
    gender: string,
    age: number
}

export type UserResponseType = Omit<UserType, 'password'> & { id: number }

export const usersApi = {
    postLoginUser(user: LoginUserType) {
        return instance.post<LoginUserResponseType, AxiosResponse<LoginUserResponseType>, LoginUserType>('/auth/login', user);
    },
    postUser(user: UserType) {
        return instance.post<UserResponseType, AxiosResponse<UserResponseType>, UserType>('/users/register', user);
    }
}