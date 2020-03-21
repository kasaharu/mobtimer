import { MobMemberProps } from './mob-member.vo';
import { MobTimeProps } from './mob-time.vo';

export const enum MobbingStateType {
  NotReady = 'noteReady',
  IsReady = 'isReady',
  IsMobbing = 'isMobbing',
  Paused = 'paused',
}

export const initialMobbingState = MobbingStateType.NotReady;

export const isReady = (time: MobTimeProps, members: MobMemberProps[]): boolean => {
  return time.count > 0 && members.length > 0;
};
