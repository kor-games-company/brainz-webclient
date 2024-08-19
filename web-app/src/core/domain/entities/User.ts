export class User {
  private readonly id: string;
  private readonly email: string;
  private name?: string;
  private imageUrl?: string;

  constructor(id: string, email: string, name?: string, imageUrl?: string) {
    this.id = id;
    this.email = email;
    this.name = name;
    this.imageUrl = imageUrl;
  }

  getId(): string {
    return this.id;
  }

  getEmail(): string {
    return this.email;
  }

  getName(): string | undefined {
    return this.name;
  }

  getImageUrl(): string | undefined {
    return this.imageUrl;
  }

  updateName(newName: string): void {
    this.name = newName;
  }

  updateImageUrl(newImageUrl: string): void {
    this.imageUrl = newImageUrl;
  }

  equals(other: User): boolean {
    return this.id === other.id;
  }
}
