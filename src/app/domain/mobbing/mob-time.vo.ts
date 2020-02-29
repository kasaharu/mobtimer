interface MobTimeProps {
  count: number;
}

export class MobTime implements MobTimeProps {
  private constructor(count: number) {
    this._count = count;
  }

  static minimumTime = 1;

  // tslint:disable-next-line: variable-name
  private _count: number;

  get count(): number {
    return this._count;
  }

  static create(count: number): MobTime {
    if (!Number.isInteger(count) || count < MobTime.minimumTime) {
      throw new Error('must be greater than 0');
    }

    return new MobTime(count);
  }
}
