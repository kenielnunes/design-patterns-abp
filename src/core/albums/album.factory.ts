import { Album } from "../../models/album";

export class AlbumFactory {
  static create(guestName: string): Album {
    return new Album(guestName);
  }
}
