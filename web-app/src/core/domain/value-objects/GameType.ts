export enum GameTypeEnum {
  slots = 'slots',
  territory = 'territory',
  quiz = 'quiz',
}

export class GameType {
  private readonly value: GameTypeEnum;

  private constructor(value: GameTypeEnum) {
    this.value = value;
  }

  static create(value: GameTypeEnum): GameType {
    if (!Object.values(GameTypeEnum).includes(value as GameTypeEnum)) {
      throw new Error('Invalid game type');
    }
    return new GameType(value as GameTypeEnum);
  }

  getValue(): GameTypeEnum {
    return this.value;
  }

  equals(other: GameType): boolean {
    return this.value === other.value;
  }
}
