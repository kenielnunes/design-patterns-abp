import { Album } from "../entities/album";

export abstract class AlbumFactory {
  abstract createAlbum(title: string): Album;
}
