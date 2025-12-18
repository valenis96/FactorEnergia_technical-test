import { createReducer, on } from '@ngrx/store';
import { User } from 'src/assets/public/models';
import { SetUserAction } from '../actions/user.action';

export const initialState: User = {
  name: '',
  email: '',
  date: '',
  address: '',
  password: ''
}


export const UserReducer = createReducer(
  initialState,
  on(SetUserAction, (state, action) => {
    console.log(action);

    return { ...state, ...action };
  }),
);
