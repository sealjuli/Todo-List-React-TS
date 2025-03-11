import { createSlice } from '@reduxjs/toolkit'
import { TaskType } from '../../types/TaskType'
import { createAppAsyncThunk } from '../../hooks/hooks'
import { todosApi, TodoType } from '../../api/todosApi'

const fetchGetTodos = createAppAsyncThunk<TodoType[], undefined>('todosSlice/fetchGetTodos', async (_, thunkAPI) => {
  try {
    const { data } = await todosApi.getTodos()
    return data
  } catch (e) {
    const error = e as { message: string }
    return thunkAPI.rejectWithValue(error.message)
  }
})

const fetchPostTodos = createAppAsyncThunk<TodoType, string>('todosSlice/fetchPostTodos', async (title: string) => {
  const { data } = await todosApi.postTodos(title)
  return data
})

const fetchPatchTodos = createAppAsyncThunk<TodoType, Omit<TaskType, 'isUpdating' | 'isCompleted'>>(
  'todosSlice/fetchPatchTodos',
  async (task: Omit<TaskType, 'isUpdating' | 'isCompleted'>) => {
    const { data } = await todosApi.patchTodos(task)
    return data
  }
)

const fetchPatchCompletedTodos = createAppAsyncThunk<TodoType[], number>(
  'todosSlice/fetchPatchCompleteTodos',
  async (id: number) => {
    const { data } = await todosApi.patchCompletedTodos(id)
    return data
  }
)

const fetchDeleteTodos = createAppAsyncThunk<TodoType, number>(
  'todosSlice/fetchDeleteTodos',
  async (id: number) => {
    const { data } = await todosApi.deleteTodos(id)
    return data
  }
)

export type InitialStateType = {
  todos: {
    status: string;
    data: TaskType[],
    error: null | string;
  }
}

const initialState: InitialStateType = { todos: { status: '', data: [], error: null } }


const todosSlice = createSlice({
  name: 'todosSlice',
  initialState,
  reducers: {
    updatingTask: (state, action) => {
      const taskUpdating = state.todos.data.find((task) => task.isUpdating)
      if (taskUpdating) {
        taskUpdating.isUpdating = false
      }
      const task = state.todos.data.find((task) => task.id === action.payload)
      if (task) {
        task.isUpdating = true
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetTodos.pending, (state) => {
        state.todos.status = 'loading'
        state.todos.error = null
      })
      .addCase(fetchGetTodos.fulfilled, (state, action) => {
        state.todos.status = 'succeeded'
        state.todos.data = action.payload
      })
      .addCase(fetchGetTodos.rejected, (state, action) => {
        state.todos.status = 'failed'
        console.log(action.payload)
        if (action.payload) {
          state.todos.error = action.payload
        }
      })
      .addCase(fetchPostTodos.fulfilled, (state, action) => {
        state.todos.status = 'succeeded'
        if (state.todos.data) {
          state.todos.data.push(action.payload)
        }
      })
      .addCase(fetchPatchTodos.fulfilled, (state, action) => {
        state.todos.status = 'succeeded'
        const task = state.todos.data.find(
          (task) => task.id === action.payload.id
        )
        if (task) {
          task.title = action.payload.title
          task.isUpdating = false
        }
      })
      .addCase(fetchPatchCompletedTodos.fulfilled, (state, action) => {
        state.todos.status = 'succeeded'
        const task = state.todos.data.find(
          (task) => task.id === action.payload[0].id
        )
        if (task) {
          task.isCompleted = action.payload[0].isCompleted
        }
      })
      .addCase(fetchDeleteTodos.fulfilled, (state, action) => {
        state.todos.status = 'succeeded'
        state.todos.data = state.todos.data.filter(
          (task) => task.id !== action.payload.id
        )
      })
  },
  selectors: {
    selectTodos: (state) => state.todos.data,
    selectTaskById: (state, id) =>
      state.todos.data.find((task) => task.id === id),
  },
})

export {
  fetchGetTodos,
  fetchPostTodos,
  fetchPatchTodos,
  fetchPatchCompletedTodos,
  fetchDeleteTodos,
}
export const { updatingTask } = todosSlice.actions
export const todosReducer = todosSlice.reducer
export const { selectTodos, selectTaskById } = todosSlice.selectors
