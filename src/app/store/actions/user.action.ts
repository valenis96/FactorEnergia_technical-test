import { createAction, props } from '@ngrx/store';
import { User } from 'src/assets/public/models';

export const SetUserAction = createAction(
  'Set User Action',
  props<{ data: User }>()
);