import { SlotsTopic } from './SlotsTopic';

export class SlotsStage {
  private readonly id: string;
  private number: number;
  private name: string;
  private description: string;
  private imageUrl?: string;
  private topics: SlotsTopic[];

  constructor(
    id: string,
    number: number,
    name: string,
    description: string,
    topics: SlotsTopic[] = [],
    imageUrl?: string,
  ) {
    this.id = id;
    this.number = number;
    this.name = name;
    this.description = description;
    this.imageUrl = imageUrl;
    this.topics = topics;
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

  getDescription(): string {
    return this.description;
  }

  getImageUrl(): string | undefined {
    return this.imageUrl;
  }

  getTopics(): SlotsTopic[] {
    return this.topics;
  }

  addTopic(topic: SlotsTopic): void {
    this.topics.push(topic);
  }

  removeTopic(topicId: string): void {
    this.topics = this.topics.filter((t) => t.getId() !== topicId);
  }
}
