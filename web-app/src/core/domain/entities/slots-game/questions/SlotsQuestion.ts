import { SlotsQuestionType } from '../../../value-objects/slots-game/SlotsQuestionType';

export abstract class SlotsQuestion {
  private readonly id: string;
  private title: string;
  private points: number;

  constructor(id: string, title: string, points: number) {
    this.id = id;
    this.title = title;
    this.points = points;
  }

  abstract getQuestionType(): SlotsQuestionType;

  getId(): string {
    return this.id;
  }

  getTitle(): string {
    return this.title;
  }

  getPoints(): number {
    return this.points;
  }

  updateTitle(newTitle: string): void {
    this.title = newTitle;
  }

  updatePoints(newPoints: number): void {
    this.points = newPoints;
  }
}
