import { MobbingStateType } from '../../../domain/mobbing/mobbing';
import reducer, { actions, initialState, State } from './index.store';

describe('index reducer', () => {
  it('action type : saveIndex', () => {
    const state: State = initialState;
    const result = reducer(state, actions.startMobbing());

    expect(result).toEqual({ ...state, mobbingState: MobbingStateType.IsMobbing });
  });
});
