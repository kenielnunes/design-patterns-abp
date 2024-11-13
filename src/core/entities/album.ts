export abstract class Album {
  constructor(public title: string) {}

  abstract getDetails(): void;
}
