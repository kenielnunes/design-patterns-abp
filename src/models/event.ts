import { Album } from "../models/album";

export class Event {
  public albums: Map<string, Album> = new Map();

  constructor(
    public id: string,
    public name: string,
    public date: Date,
    public description: string
  ) {}

  addAlbum(album: Album) {
    this.albums.set(album.guestName, album);
  }

  getAlbum(name: string): Album | undefined {
    return this.albums.get(name);
  }
}
