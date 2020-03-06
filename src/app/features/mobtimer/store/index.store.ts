import { createAction, createReducer, on, props, union } from '@ngrx/store';
import { MobMember } from '../../../domain/mobbing/mob-member.vo';
import { MobTimeProps } from '../../../domain/mobbing/mob-time.vo';
import { createFeatureStoreSelector } from '../../../shared/store/helpers/selector';

// NOTE: State
export interface State {
  mobTime: MobTimeProps;
  mobMembers: MobMember[];
  isMobbing: boolean;
  countdownSeconds: number;
}

export const initialState: State = {
  mobTime: { count: 1 },
  mobMembers: [],
  isMobbing: false,
  countdownSeconds: 0,
};

// NOTE: Actions
const setMobbing = createAction('[MobTimer] set mobbing', props<{ mobTime: MobTimeProps; mobMembers: MobMember[] }>());
const saveMobTime = createAction('[MobTimer] save mobTime', props<{ mobTime: MobTimeProps }>());
const saveMobMember = createAction('[MobTimer] save mobMember', props<{ mobMember: MobMember }>());
const deleteMobMember = createAction('[MobTimer] delete mobMember', props<{ memberName: string }>());
const startMobbing = createAction('[MobTimer] start mobbing');
const stopMobbing = createAction('[MobTimer] stop mobbing');
const setCountdownSeconds = createAction('[MobTimer] set countdown seconds', props<{ countdownSeconds: number }>());

export const actions = { setMobbing, saveMobTime, saveMobMember, deleteMobMember, startMobbing, stopMobbing, setCountdownSeconds };
const actionsUnion = union(actions);

// NOTE: Reducer
const mobTimerReducer = createReducer(
  initialState,
  on(setMobbing, (_, { mobTime, mobMembers }) => ({ mobTime, mobMembers, isMobbing: false, countdownSeconds: 0 })),
  on(saveMobTime, (state, { mobTime }) => ({ ...state, mobTime })),
  on(saveMobMember, (state, { mobMember }) => ({ ...state, mobMembers: [...state.mobMembers, mobMember] })),
  on(deleteMobMember, (state, { memberName }) => ({
    ...state,
    mobMembers: state.mobMembers.filter((member) => member.name !== memberName),
  })),
  on(startMobbing, (state) => ({ ...state, isMobbing: true })),
  on(stopMobbing, (state) => ({ ...state, isMobbing: false })),
  on(setCountdownSeconds, (state, { countdownSeconds }) => ({ ...state, countdownSeconds })),
);

export default function reducer(state: State, action: typeof actionsUnion): State {
  return mobTimerReducer(state, action);
}

// NOTE: Selectors
export const featureName = 'mobTimer';
export const selectStore = createFeatureStoreSelector<State>(featureName);
