import { Observer } from "../observers/observer.interface";
import { Album } from "./album";

export class Event {
  private albums: Album[] = [];
  private observers: Observer[] = [];

  constructor(public id: string, public name: string) {}

  addAlbum(album: Album): void {
    this.albums.push(album);
  }

  getAlbums(): Album[] {
    return this.albums;
  }

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  notifyObservers(message: string): void {
    this.observers.forEach((observer) => observer.update(message));
  }
}
