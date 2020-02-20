import reducer, { actions, State } from './index.store';

describe('index reducer', () => {
  it('action type : saveIndex', () => {
    const state: State = { index: null };
    const updatedState = null;
    const result = reducer(state, actions.saveIndex({ index: updatedState }));

    expect(result).toEqual({ index: updatedState });
  });
});
