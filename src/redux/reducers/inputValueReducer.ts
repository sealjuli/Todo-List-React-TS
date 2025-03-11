import { UPDATE_INPUT_VALUE, InputValueActionsType } from "../actions/inputValueActions";

const initialState = {
  value: '',
};

type InitialStateType = typeof initialState

export const inputValueReducer = (state: InitialStateType = initialState, action: InputValueActionsType): InitialStateType => {
  switch (action.type) {
    case UPDATE_INPUT_VALUE:
      return {
        ...state, value: action.payload
      };
    default:
      return state;
  }
};
