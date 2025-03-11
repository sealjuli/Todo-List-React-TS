import { UPDATE_VALUE, UpdateValueActionsType } from "../actions/updatingValueActions";

const initialState = {
  updatingValue: '',
};

type InitialStateType = typeof initialState

export const updatingValueReducer = (state: InitialStateType = initialState, action: UpdateValueActionsType): InitialStateType => {
  switch (action.type) {
    case UPDATE_VALUE:
      return {
        ...state, updatingValue: action.payload
      };
    default:
      return state;
  }
};
