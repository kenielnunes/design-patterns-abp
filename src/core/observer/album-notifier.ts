import { Observable } from "./observable.interface";
import { Observer } from "./observer.interface";

export class AlbumNotifier implements Observable {
  private observers: Observer[] = [];

  addObserver(observer: Observer) {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notifyObservers(data: string) {
    this.observers.forEach((observer) => observer.update(data));
  }
}
