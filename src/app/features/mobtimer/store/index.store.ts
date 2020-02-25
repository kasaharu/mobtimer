import { createAction, createReducer, on, props, union } from '@ngrx/store';
import { createFeatureStoreSelector } from '../../../shared/store/helpers/selector';

// NOTE: State
export interface State {
  mobTime: number;
  mobMembers: string[];
}

export const initialState: State = {
  mobTime: 0,
  mobMembers: [],
};

// NOTE: Actions
export const setMobTimer = createAction('[MobTimer] set mobTimer', props<{ mobTime: number; mobMembers: string[] }>());
export const saveMobTime = createAction('[MobTimer] save mobTime', props<{ mobTime: number }>());
export const saveMobMember = createAction('[MobTimer] save mobMember', props<{ mobMember: string }>());

export const actions = { setMobTimer, saveMobTime, saveMobMember };
const actionsUnion = union(actions);

// NOTE: Reducer
const mobTimerReducer = createReducer(
  initialState,
  on(setMobTimer, (_, { mobTime, mobMembers }) => ({ mobTime, mobMembers })),
  on(saveMobTime, (state, { mobTime }) => ({ ...state, mobTime })),
  on(saveMobMember, (state, { mobMember }) => ({ ...state, mobMembers: [...state.mobMembers, mobMember] })),
);

export default function reducer(state: State, action: typeof actionsUnion): State {
  return mobTimerReducer(state, action);
}

// NOTE: Selectors
export const featureName = 'mobTimer';
export const selectStore = createFeatureStoreSelector<State>(featureName);
