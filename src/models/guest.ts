import { Observer } from "../observers/observer.interface";

export class Guest implements Observer {
  constructor(public name: string, public qrCode: string) {}

  update(message: string): void {
    console.log(`Guest ${this.name} received notification: ${message}`);
  }
}
