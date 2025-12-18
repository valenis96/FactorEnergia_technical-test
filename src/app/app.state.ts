import { Invoice, User } from "src/assets/public/models";
import { UserReducer } from "./store/reducers/user.reducer";
import { ActionReducerMap } from "@ngrx/store";
import { invoices } from "src/assets/public/data";
import { InvoicesReducer } from "./store/reducers/pdf.reducer";

export interface AppState {
  user: User;
  invoices: Invoice[]
}

export const reducers: ActionReducerMap<AppState> = {
  user: UserReducer,
  invoices: InvoicesReducer

};