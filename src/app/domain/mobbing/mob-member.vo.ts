import { MobMemberService } from './mob-member.service';

export interface MobMemberProps {
  name: string;
}

export class MobMember implements MobMemberProps {
  private constructor(name: string) {
    this.name = name;
  }

  readonly name: string;

  static create(name: string): MobMember {
    if (!name) {
      throw new Error('not allow empty');
    }

    if (MobMemberService.exists(name)) {
      throw new Error(`${name} exists already`);
    }

    return new MobMember(name);
  }
}
