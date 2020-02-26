import { createAction, createReducer, on, props, union } from '@ngrx/store';
import { MobMember } from '../../../domain/mobbing/mob-member.vo';
import { MobTime } from '../../../domain/mobbing/mob-time.vo';
import { createFeatureStoreSelector } from '../../../shared/store/helpers/selector';

// NOTE: State
export interface State {
  mobTime: MobTime;
  mobMembers: MobMember[];
}

export const initialState: State = {
  mobTime: MobTime.create(1),
  mobMembers: [],
};

// NOTE: Actions
export const setMobbing = createAction('[MobTimer] set mobbing', props<{ mobTime: MobTime; mobMembers: MobMember[] }>());
export const saveMobTime = createAction('[MobTimer] save mobTime', props<{ mobTime: MobTime }>());
export const saveMobMember = createAction('[MobTimer] save mobMember', props<{ mobMember: MobMember }>());

export const actions = { setMobbing, saveMobTime, saveMobMember };
const actionsUnion = union(actions);

// NOTE: Reducer
const mobTimerReducer = createReducer(
  initialState,
  on(setMobbing, (_, { mobTime, mobMembers }) => ({ mobTime, mobMembers })),
  on(saveMobTime, (state, { mobTime }) => ({ ...state, mobTime })),
  on(saveMobMember, (state, { mobMember }) => ({ ...state, mobMembers: [...state.mobMembers, mobMember] })),
);

export default function reducer(state: State, action: typeof actionsUnion): State {
  return mobTimerReducer(state, action);
}

// NOTE: Selectors
export const featureName = 'mobTimer';
export const selectStore = createFeatureStoreSelector<State>(featureName);
