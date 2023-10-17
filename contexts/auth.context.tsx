import { User } from '@pdt/models/user';
import React from 'react';

export enum AuthActionType {
  SET_USER = 'SET_USER',
  SET_SYSTEM_SETTINGS = 'SET_SYSTEM_SETTINGS',
  UPDATE_SYSTEM_SETTINGS = 'UPDATE_SYSTEM_SETTINGS'
}

export interface SetUserAction {
  type: AuthActionType.SET_USER;
  payload: User | null;
}
export interface SetSystemSettingsAction {
  type: AuthActionType.SET_SYSTEM_SETTINGS;
  payload: User | null;
}
export interface UpdateSystemSettingsAction {
  type: AuthActionType.UPDATE_SYSTEM_SETTINGS;
  payload: User | null;
}
export type AuthAction =
  | SetUserAction
  | SetSystemSettingsAction
  | UpdateSystemSettingsAction;

export interface AuthState {
  user: User | null;
}

interface IAuthContext {
  state: AuthState;
  login: () => void;
}

const initialState: AuthState = {
  user: null
};

function reducer(state: AuthState, action: AuthAction) {
  switch (action.type) {
    default:
      return state;
  }
}

function useAuthReducer() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const login = () => {};

  return {
    state,
    login
  };
}

export const AuthContext = React.createContext<IAuthContext>({
  state: initialState,
  login: () => {}
});

export function useAuth() {
  return React.useContext(AuthContext);
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const authReducer = useAuthReducer();

  return (
    <AuthContext.Provider value={authReducer}>{children}</AuthContext.Provider>
  );
};
