export const enum MobbingStateType {
  NotReady = 'noteReady',
  IsReady = 'isReady',
  IsMobbing = 'isMobbing',
  Paused = 'paused',
}

export const initialMobbingState = MobbingStateType.NotReady;
