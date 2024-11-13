import { Album } from "../entities/album";
import { StandardAlbum } from "../entities/standard-album";
import { AlbumFactory } from "./album-factory";

export class StandardAlbumFactory extends AlbumFactory {
  createAlbum(title: string): Album {
    return new StandardAlbum(title);
  }
}
