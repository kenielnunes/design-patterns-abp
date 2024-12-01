import { Observer } from "./observer.interface";

export interface Observable {
  addObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(data: string): void;
}
