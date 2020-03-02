import { MobMemberService } from './mob-member.service';

interface MobMemberProps {
  name: string;
}

export class MobMember implements MobMemberProps {
  private constructor(name: string) {
    this._name = name;
  }

  // tslint:disable-next-line: variable-name
  private _name: string;

  get name(): string {
    return this._name;
  }

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
