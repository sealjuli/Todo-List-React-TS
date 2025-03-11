export const UPDATE_INPUT_VALUE = "UPDATE_INPUT_VALUE";

export const updateValue = (newValue: string) => {
  return {
    type: UPDATE_INPUT_VALUE,
    payload: newValue,
  } as const;
};

export type InputValueActionsType = ReturnType<typeof updateValue>