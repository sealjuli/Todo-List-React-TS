import { JSX, KeyboardEvent } from 'react';
import { updateTask } from '../redux/actions/taskActions';
import { updateValue } from '../redux/actions/updatingValueActions';
import { useAppSelector, useAppDispatch } from '../hooks/hooks';

type PropsType = {
  id: string;
};

export const UpdatingTask = ({ id }: PropsType): JSX.Element => {
  const dispatch = useAppDispatch();

  const updatingValue = useAppSelector(
    (state) => state.updatingValueReducer.updatingValue,
  );

  const onKeyDownEnter = (e: KeyboardEvent<HTMLInputElement>, id: string) => {
    if (e.key === 'Enter') {
      dispatch(updateTask({ id, value: updatingValue }));
    }
  };

  const onClickButton = () => {
    dispatch(
      updateTask({
        id,
        value: updatingValue,
      }),
    );
  };

  return (
    <>
      <input
        autoFocus
        onChange={(event) => dispatch(updateValue(event.target.value))}
        onKeyDown={(e) => onKeyDownEnter(e, id)}
        value={updatingValue}
      />
      <button onClick={onClickButton}>{'Update'}</button>
    </>
  );
};
