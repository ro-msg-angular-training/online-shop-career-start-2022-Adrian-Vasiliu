import { createReducer, on } from '@ngrx/store';
import * as loginActions from "../actions/login.actions";
import {User} from "../../interfaces/User";
import {setRedirectUrl} from "../actions/login.actions";

export interface LoginState {
  status: 'pending' | 'loading' | 'error' | 'success';
  user: User | null;
  redirectUrl: string;
}

const initialState: LoginState = {
  status: 'pending',
  user: null,
  redirectUrl: '/',
};

export const loginReducer = createReducer(
  initialState,

  on(loginActions.login, (state) => ({
    ...state,
    status: 'loading',
  })),
  on(loginActions.loginSuccess, (state, { user }) => ({
    ...state,
    status: 'success',
    user,
  })),
  on(loginActions.loginFailure, (state) => ({
    ...state,
    status: 'error',
  })),

  on(setRedirectUrl, (state, { redirectUrl }) => ({
    ...state,
    redirectUrl,
  }))
);
