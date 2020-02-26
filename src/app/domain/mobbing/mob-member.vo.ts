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

    return new MobMember(name);
  }
}
