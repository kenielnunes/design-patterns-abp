import { Album } from "../entities/album";
import { AlbumFactory } from "../factories/album-factory";

export class AlbumService {
  private albums: Album[] = [];

  constructor(private factory: AlbumFactory) {}

  createAlbum(title: string): void {
    const album = this.factory.createAlbum(title);
    this.albums.push(album);
    album.getDetails();
  }
}
