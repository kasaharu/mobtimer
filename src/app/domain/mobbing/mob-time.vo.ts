export interface MobTimeProps {
  count: number;
}

export class MobTime implements MobTimeProps {
  private constructor(count: number) {
    this.count = count;
  }

  static minimumTime = 1;

  readonly count: number;

  static create(count: number): MobTime {
    if (!Number.isInteger(count) || count < MobTime.minimumTime) {
      throw new Error('must be greater than 0');
    }

    return new MobTime(count);
  }
}
