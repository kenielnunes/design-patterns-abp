import { Album } from "../../models/album";

export class AlbumFactory {
  static createAlbum(albumName: string): Album {
    console.log(`Creating album: ${albumName}`);
    return new Album(albumName);
  }
}
