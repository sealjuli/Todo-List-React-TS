export const UPDATE_VALUE = "UPDATE_VALUE";

export const updateValue = (newValue: string) => {
  return {
    type: UPDATE_VALUE,
    payload: newValue,
  } as const;
};

export type UpdateValueActionsType = ReturnType<typeof updateValue>