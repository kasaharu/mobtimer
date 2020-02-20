import { createAction, createReducer, on, props, union } from '@ngrx/store';

// NOTE: State
export interface State {
  index: any | null;
}

export const initialState: State = {
  index: null,
};

// NOTE: Actions
export const saveIndex = createAction('[Index] save', props<{ index: any }>());

export const actions = { saveIndex };
const actionsUnion = union(actions);

// NOTE: Reducer
const indexReducer = createReducer(initialState, on(saveIndex, (state, { index }) => ({ ...state, index })));

export default function reducer(state: State, action: typeof actionsUnion): State {
  return indexReducer(state, action);
}

// NOTE: Selectors
export const featureName = 'index';
