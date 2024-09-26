import { Result } from '@/shared/utils/types/Result';

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

  static create(value: GameTypeEnum): Result<GameType, string> {
    if (!Object.values(GameTypeEnum).includes(value as GameTypeEnum)) {
      return Result.err('Invalid enum value');
    }
    return Result.ok(new GameType(value as GameTypeEnum));
  }

  getValue(): GameTypeEnum {
    return this.value;
  }

  equals(other: GameType): boolean {
    return this.value === other.value;
  }
}
