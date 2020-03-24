import { createAction, createReducer, on, props, union } from '@ngrx/store';
import { MobMemberProps } from '../../../domain/mobbing/mob-member.vo';
import { MobTimeProps } from '../../../domain/mobbing/mob-time.vo';
import { initialMobbingState, isReady, MobbingStateType } from '../../../domain/mobbing/mobbing';
import { createFeatureStoreSelector } from '../../../shared/store/helpers/selector';

// NOTE: State
export interface State {
  mobTime: MobTimeProps;
  mobMembers: MobMemberProps[];
  mobbingState: MobbingStateType;
  countdownSeconds: number;
}

export const initialState: State = {
  mobTime: { count: 1 },
  mobMembers: [],
  mobbingState: initialMobbingState,
  countdownSeconds: 0,
};

// NOTE: Actions
const setMobbing = createAction('[MobTimer] set mobbing', props<{ mobTime: MobTimeProps; mobMembers: MobMemberProps[] }>());
const changeMobTime = createAction('[MobTimer] save mobTime', props<{ mobTime: MobTimeProps }>());
const createMobMember = createAction('[MobTimer] save mobMember', props<{ mobMember: MobMemberProps }>());
const deleteMobMember = createAction('[MobTimer] delete mobMember', props<{ memberName: string }>());
const startMobbing = createAction('[MobTimer] start mobbing');
const pauseMobbing = createAction('[MobTimer] pause mobbing');
const stopMobbing = createAction('[MobTimer] stop mobbing');
const setCountdownSeconds = createAction('[MobTimer] set countdown seconds', props<{ countdownSeconds: number }>());

export const actions = {
  setMobbing,
  changeMobTime,
  createMobMember,
  deleteMobMember,
  startMobbing,
  pauseMobbing,
  stopMobbing,
  setCountdownSeconds,
};
const actionsUnion = union(actions);

// NOTE: Reducer
const mobTimerReducer = createReducer(
  initialState,
  on(setMobbing, (state, { mobTime, mobMembers }) => ({
    ...state,
    mobTime,
    mobMembers,
    mobbingState: changeMobbingState(mobTime, mobMembers),
  })),
  on(changeMobTime, (state, { mobTime }) => ({ ...state, mobTime, mobbingState: changeMobbingState(mobTime, state.mobMembers) })),
  on(createMobMember, (state, { mobMember }) => ({
    ...state,
    mobMembers: [...state.mobMembers, mobMember],
    mobbingState: changeMobbingState(state.mobTime, [...state.mobMembers, mobMember]),
  })),
  on(deleteMobMember, (state, { memberName }) => ({
    ...state,
    mobMembers: state.mobMembers.filter((member) => member.name !== memberName),
    mobbingState: changeMobbingState(
      state.mobTime,
      state.mobMembers.filter((member) => member.name !== memberName),
    ),
  })),
  on(startMobbing, (state) => ({ ...state, mobbingState: MobbingStateType.IsMobbing })),
  on(pauseMobbing, (state) => ({ ...state, mobbingState: MobbingStateType.Paused })),
  on(stopMobbing, (state) => ({ ...state, mobbingState: MobbingStateType.IsReady })),
  on(setCountdownSeconds, (state, { countdownSeconds }) => ({ ...state, countdownSeconds })),
);

export default function reducer(state: State, action: typeof actionsUnion): State {
  return mobTimerReducer(state, action);
}

// NOTE: Selectors
export const featureName = 'mobTimer';
export const selectStore = createFeatureStoreSelector<State>(featureName);

const changeMobbingState = (time: MobTimeProps, members: MobMemberProps[]): MobbingStateType => {
  return isReady(time, members) ? MobbingStateType.IsReady : MobbingStateType.NotReady;
};
