import { createReducer, on } from '@ngrx/store';
import { Invoice } from 'src/assets/public/models';
import { invoices } from 'src/assets/public/data';
import { SetPDFAction } from '../actions/pdf.actions';

export const initialState: Invoice[] = invoices

export const InvoicesReducer = createReducer(
  initialState,
  on(SetPDFAction, (_, action) => {
    return { ...action.data };
  }),
);
