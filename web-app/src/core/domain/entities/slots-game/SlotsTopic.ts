import { SlotsQuestion } from './questions/SlotsQuestion';

export class SlotsTopic {
  private readonly id: string;
  private number: number;
  private name: string;
  private questions: SlotsQuestion[];

  constructor(id: string, number: number, name: string, questions: SlotsQuestion[] = []) {
    this.id = id;
    this.number = number;
    this.name = name;
    this.questions = questions;
  }

  getId(): string {
    return this.id;
  }

  getNumber(): number {
    return this.number;
  }

  getName(): string {
    return this.name;
  }

  getQuestions(): SlotsQuestion[] {
    return this.questions;
  }

  addQuestion(question: SlotsQuestion): void {
    this.questions.push(question);
  }

  removeQuestion(questionId: string): void {
    this.questions = this.questions.filter((q) => q.getId() !== questionId);
  }
}
