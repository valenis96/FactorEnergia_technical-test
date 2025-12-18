import { createAction, props } from '@ngrx/store';
import { Invoice } from 'src/assets/public/models';

export const SetPDFAction = createAction(
  'Set PDF Action',
  props<{ data: Invoice[] }>()
);