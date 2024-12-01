import { Observer } from "./observer.interface";

export class AlbumObserver implements Observer {
  constructor(private name: string) {}

  update(data: string) {
    console.log(`${this.name} received update: ${data}`);
  }
}
