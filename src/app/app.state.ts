import { User } from "src/assets/public/models";
import { UserReducer } from "./store/reducers/user.reducer";
import { ActionReducerMap } from "@ngrx/store";

export interface AppState {
  user: User;
}

export const reducers: ActionReducerMap<AppState> = {
  user: UserReducer
};