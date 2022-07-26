import { createAction, props } from '@ngrx/store';
import {UserCredentials} from "../../interfaces/UserCredentials";
import {User} from "../../interfaces/User";

export const login = createAction(
  '[Login Form] Login', props<{ credentials: UserCredentials }>());

export const loginSuccess = createAction(
  '[API] LoginSuccess', props<{ user: User }>());

export const loginFailure = createAction(
  '[API] LoginFailure');

export const setRedirectUrl = createAction(
  '[Protected Page] Set Redirect Url',
  props<{ redirectUrl: string }>()
);
