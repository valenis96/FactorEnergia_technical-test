import { createReducer, on } from '@ngrx/store';
import { User } from 'src/assets/public/models';
import { SetUserAction } from '../actions/user.action';
import { users } from 'src/assets/public/data';

export const initialState: User = users[0]
// {
//   name: '',
//   email: '',
//   date: '',
//   address: '',
//   password: ''
// }


export const UserReducer = createReducer(
  initialState,
  on(SetUserAction, (_, action) => {
    return { ...action.data };
  }),
);
